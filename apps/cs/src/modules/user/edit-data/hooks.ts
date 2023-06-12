import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { fileIdentityRequest, fileCapabilityRequest, fileCharacterRequest } from "./api";
import {
  TIdentityFile,
  TIdentityResponse,
  TCapabilityFile,
  TCapabilityResponse,
  TCharacterFile,
  TCharacterResponse,
} from "./types";

export const useIdentityInformation = (): UseMutationResult<
  TIdentityResponse,
  TMetaErrorResponse,
  TIdentityFile,
  unknown
> => {
  return useMutation({
    mutationKey: ["identity-information-put"],
    mutationFn: async (payload) => await fileIdentityRequest(payload),
  });
};

export const useCharacterInformation = (): UseMutationResult<
  TCharacterResponse,
  TMetaErrorResponse,
  TCharacterFile,
  unknown
> => {
  return useMutation({
    mutationKey: ["character-information-put"],
    mutationFn: async (payload) => await fileCharacterRequest(payload),
  });
};

export const useCapabilityInformation = (): UseMutationResult<
  TCapabilityResponse,
  TMetaErrorResponse,
  TCapabilityFile,
  unknown
> => {
  return useMutation({
    mutationKey: ["capability-information-put"],
    mutationFn: async (payload) => await fileCapabilityRequest(payload),
  });
};
