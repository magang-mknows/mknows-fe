import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';

import { TFacultyResponse } from './types';
import { facultyRequest } from './api';

export const useFaculty = (): UseQueryResult<
  TFacultyResponse,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-faculty'],
    queryFn: async () => await facultyRequest(),
  });
};
