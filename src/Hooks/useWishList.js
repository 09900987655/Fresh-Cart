import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

function getAuthHeaders() {
  const token = localStorage.getItem("userToken");
  return token ? { token } : {};
}

export function addToWish(productId) {
  return axios.post(
    `https://ecommerce.routemisr.com/api/v1/wishlist`,
    { productId },
    {
      headers: getAuthHeaders(),
    }
  );
}

export function deleteWish(productId) {
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
    headers: getAuthHeaders(),
  });
}

export function getWish() {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    headers: getAuthHeaders(),
  });
}

export function useGetWish(key, fn, options = {}) {
  return useQuery(key, fn, options);
}

export function useCrudWish(fn) {
  const queryClient = useQueryClient();
  return useMutation(fn, {
    onSuccess: (data) => {
      toast.success(data?.data?.message);
      queryClient.invalidateQueries("getWish");
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error?.message || "Request failed";
      toast.error(message);
    },
  });
}

