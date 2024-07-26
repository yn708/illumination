export interface Author {
  id: number;
  name: string;
  birth_year?: string | null | undefined;
  death_year?: string | null | undefined;
  profession?: string | undefined;
  created_at: string;
  updated_at: string;
}

export interface AuthorFormData {
  name: string;
  birth_year?: string | null;
  death_year?: string | null;
  profession?: string;
}
