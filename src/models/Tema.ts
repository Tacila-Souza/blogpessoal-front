import type Postagem from "./Postagem";

export default interface Tema {
  id: number;
  descrocao: string;
  postagem?: Postagem[] | null;
}