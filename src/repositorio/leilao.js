import instance from '../servicos/apiLeiloes';

export async function obtemLeiloes() {
  try {
    const resposta = await instance.get(`/leiloes`);
    return resposta.data;
  } catch (erro) {
    return [];
  }
}

export async function obtemLeilao(id) {
  try {
    const resposta = await instance.get(`/leiloes/${id}`);
    return resposta.data;
  } catch(erro) {
    return {};
  }
}
