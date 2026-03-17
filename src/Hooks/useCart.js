
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-hot-toast';

const BASE_URL = 'https://ecommerce.routemisr.com/api/v1';

function getAuthHeaders() {
  const token = localStorage.getItem('userToken');
  if (!token) return {};
  return {
    token,
  };
}

export function addToCart(productId) {
  return axios.post(
    `${BASE_URL}/cart`,
    { productId },
    {
      headers: getAuthHeaders(),
    }
  );
}

export function getCart() {
  return axios.get(`${BASE_URL}/cart`, {
    headers: getAuthHeaders(),
  });
}

export function getOrder() {
  return axios.get(`${BASE_URL}/orders/user`, {
    headers: getAuthHeaders(),
  });
}

export function deleteCart(id) {
  return axios.delete(`${BASE_URL}/cart/${id}`, {
    headers: getAuthHeaders(),
  });
}

export function ubdateCart({ id, count }) {
  return axios.put(
    `${BASE_URL}/cart/${id}`,
    { count },
    {
      headers: getAuthHeaders(),
    }
  );
}

export function checkout({ id, shippingAddress }) {
  return axios.post(
    `${BASE_URL}/orders/checkout-session/${id}?url=http://localhost:3000`,
    { shippingAddress },
    {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeaders(),
      },
    }
  );
}

export function useCartCrud(fn) {
  const queryClient = useQueryClient();
  return useMutation(fn, {
    onSuccess: (data) => {
      toast.success(data?.data?.message);
      queryClient.invalidateQueries('cart');
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error?.message || 'Request failed';
      toast.error(message);
    },
  });
}

export function useCart(key, fn, options = {}) {
  return useQuery(key, fn, options);
}
