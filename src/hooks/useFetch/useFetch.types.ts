import { QueryOptions } from 'react-query';

export interface IUseFetch {
  /**
   * @description Endereço da API que será chamada para buscar os dados
   * @type {string}
   */
  url: string;

  /**
   * @default url
   * @description O nome da query, será usado para identificar a query no cache do react-query.
   * Em caso de não ser informado, o nome da query será o valor da url.
   * @type {string}
   */
  name?: string;

  /**
   * @description Parâmetros opcionais que podem ser utilizados no useInfiniteQuery do react-query.
   */
  options?: QueryOptions;
}
