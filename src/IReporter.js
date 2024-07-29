class IReporter {
  ler(caminho) {
    throw new Error("Método não implementado");
  }
  
  parse() {
    throw new Error("Método não implementado");
  }

  reportar() {
    throw new Error("Método não implementado");
  }
}

export { IReporter };
