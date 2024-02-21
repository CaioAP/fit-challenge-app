import { AxiosError } from 'axios';

export function useMessage() {
  const getErrorMessage = (error: unknown | Error | AxiosError) => {
    let message = 'something went wrong';
    if (error instanceof AxiosError && 'response' in error)
      message = error.response?.data;
    return message.trim();
  };

  const formatMessage = (message: string) => {
    const messages: { [key: string]: string } = {
      'email already exists': 'E-mail já existente',
      'email not found': 'E-mail ou senha inválidos',
      'invalid finish date': 'Data de término inválida',
      'invalid start date': 'Data de início inválida',
      'logged in': 'Logado com sucesso',
      'logged out': 'Deslogado com sucesso',
      'must be logged in': 'Você precisar estar logado para realizar esta ação',
      'password does not match': 'E-mail ou senha inválidos',
      'phone already exists': 'Telefone já existente',
      'something went wrong': 'Algo deu errado, tente novamente mais tarde',
      registered: 'Cadastrado com sucesso'
    };
    if (!(message in messages))
      return 'Algo deu errado, tente novamente mais tarde';
    return messages[message];
  };

  return {
    getErrorMessage,
    formatMessage
  };
}
