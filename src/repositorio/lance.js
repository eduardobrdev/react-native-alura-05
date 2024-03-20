import instance from '../servicos/apiLeiloes';

export async function obtemLancesDoLeilao(id) {
  try {
    const resposta = await instance.get(`/lances?leilaoId=${id}&_sort=valor`);
    return resposta.data;
  } catch(erro) {
    return [];
  }
}

export async function adicionaLance(lance) {
  try {
    await instance.post(`/lances`, lance);
    return true;
  } catch(erro) {
    return false;
  }
}