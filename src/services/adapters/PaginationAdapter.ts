export interface PaginationParams {
  offset: string | null;
  limit: string | null;
}

export interface PaginationData {
  next: PaginationParams | null;
  previous: PaginationParams | null;
}

const extractParams = (url: string | null): PaginationParams | null => {
  if (!url) return null;

  const urlParams = new URLSearchParams(url.split('?')[1]);
  const offset = urlParams.get('offset');
  const limit = urlParams.get('limit');

  return {
    offset: offset ? offset : null,
    limit: limit ? limit : null,
  };
};

export const paginationAdapter = (data: { next: string | null; previous: string | null }): PaginationData => {
  console.log('da->', data);
  
  return {
    next: extractParams(data.next),
    previous: extractParams(data.previous),
  };
};
