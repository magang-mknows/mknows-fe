import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useEffect, useCallback, DependencyList } from "react";
import { getProfileMe } from "../../components/organisms/sidebar/profile/api";
import { TProfileResponse } from "../../components/organisms/sidebar/profile/types";

/**
 * Debounce Function.
 * @constructor
 * @param {any} effect - Effect of Debounce
 * @param {DependencyList} dependencies - Dependencies of Effect
 * @param {number} delay - Delay of timer
 * @abstract
 * useDebounce(
    () => {
      setSearch(debounceSearch);
    },
    [debounceSearch], 
    800,
  );
 */

export function useDebounce(
  effect: VoidFunction,
  dependencies: DependencyList,
  delay: number,
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export const useQueryParams = () => new URLSearchParams(useLocation().search);

export const useProfile = (): UseQueryResult<TProfileResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["get-profile"],
    queryFn: async () => await getProfileMe(),
  });
};
