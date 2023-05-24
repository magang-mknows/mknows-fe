import { useRecoilState } from 'recoil';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { TEventParams, TEventPayload, TEventResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import {
  eventCreateRequest,
  eventDeleteRequest,
  eventGetByIdRequest,
  eventGetRequest,
  eventUpdateRequest,
} from './api';

export const useGetEvent = (): UseQueryResult<
  TEventResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['event-get'],
    queryFn: async () => await eventGetRequest(),
  });

export const useGetEventById = (
  id: number | string
): UseQueryResult<TEventResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['event-get-by-id', id],
    queryFn: async () => await eventGetByIdRequest(id),
  });

export const useCreateEvent = (): UseMutationResult<
  TEventResponse,
  TMetaErrorResponse,
  TEventPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['create-event'],
    mutationFn: async (payload) => await eventCreateRequest(payload),
  });

export const useUpdateEvent = (): UseMutationResult<
  TEventResponse,
  TMetaErrorResponse,
  TEventPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['update-event'],
    mutationFn: async (payload) => await eventUpdateRequest(payload),
  });

export const useDeleteEvent = (): UseMutationResult<
  TEventResponse,
  TMetaErrorResponse,
  TEventParams,
  unknown
> =>
  useMutation({
    mutationKey: ['delete-event'],
    mutationFn: async (params) => await eventDeleteRequest(params),
  });
