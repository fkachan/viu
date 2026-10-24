// Configurações do viu, — edite aqui o que muda raramente.
export const site = {
  url: 'https://viu.blog.br',
  name: 'viu,',
  // Frase da casa (a manchete da home) e linha descritiva.
  manchete: 'Uma ideia puxa outra.',
  descricao: 'Negócios, política, livros e relações — com evidência, sem bolha. Um texto por semana, por Felipe Kachan.',
  // Descrição curta para buscadores e redes.
  metaDescricao: 'viu, é o blog de Felipe Kachan sobre negócios, política, livros, relações e sociedade — com evidência, sem bolha.',
  autor: 'Felipe Kachan',
  // E-mail para o "me diz onde eu errei" e para o rodapé. Troque pelo seu.
  email: 'contato@viu.blog.br',
  // Usuário do Buttondown (buttondown.com/<usuario>). Deixe vazio até criar a conta.
  buttondown: '',
  // Quantos textos aparecem na home antes do link "Textos anteriores →".
  textosNaHome: 8,
  rodape: 'Opiniões pessoais, não do meu empregador.',
};

// As seis categorias, na ordem oficial. A sexta é uma gaveta honesta.
export const categorias = [
  { nome: 'Negócios', slug: 'negocios' },
  { nome: 'Política', slug: 'politica' },
  { nome: 'Sociedade', slug: 'sociedade' },
  { nome: 'Livros', slug: 'livros' },
  { nome: 'Relações', slug: 'relacoes' },
  { nome: 'Etc.', slug: 'etc' },
] as const;

export type Categoria = (typeof categorias)[number]['nome'];

export function slugDaCategoria(nome: string): string {
  return categorias.find((c) => c.nome === nome)?.slug ?? 'etc';
}
