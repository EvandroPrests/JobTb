//Validação das entradas para o BD

const validateFieldPrimeiroNome = (request, response, next) => {
    const { body } = request;
    const firstNamePattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

    if (body.PrimeiroNome === undefined) {
        return response.status(400).json({ message: 'O campo "PrimeiroNome" é obrigatório' });
    }

    if (!firstNamePattern.test(body.PrimeiroNome)) {
        return response.status(400).json({ message: 'O campo "PrimeiroNome" só pode conter letras do alfabeto' });
    }

    next();
};

const validateFieldSobrenome = (request, response, next) => {
    const { body } = request;
    const sobrenomePattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

    if (body.Sobrenome === undefined) {
        return response.status(400).json({ message: 'O campo "Sobrenome" é obrigatório' });
    }

    if (!sobrenomePattern.test(body.Sobrenome)) {
        return response.status(400).json({ message: 'O campo "Sobrenome" só pode conter letras do alfabeto' });
    }

    next();
};

const validateNumeroTelefone = (request, response, next) => {
    const { body } = request;
    const telefonePattern = /^\(\d{2}\) 9 \d{8}$/;

    if (body.telefone === undefined) {
        return response.status(400).json({ message: 'O campo "telefone" é obrigatório' });
    }

    if (!telefonePattern.test(body.telefone)) {
        return response.status(400).json({ message: 'O campo "telefone" deve estar no formato "(XX) 9 XXXXXXXX"' });
    }

    next();
};

const validateEmail = (request, response, next) => {
    const { body } = request;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (body.email === undefined) {
        return response.status(400).json({ message: 'O campo "email" é obrigatório' });
    }

    if (!emailPattern.test(body.email)) {
        return response.status(400).json({ message: 'Por favor, insira um endereço de e-mail válido' });
    }

    next();
};

const validateCPF = (request, response, next) => {
    const { body } = request;
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (body.cpf === undefined) {
        return response.status(400).json({ message: 'O campo "cpf" é obrigatório' });
    }

    if (!cpfPattern.test(body.cpf)) {
        return response.status(400).json({ message: 'Por favor, insira um número de CPF válido no formato XXX.XXX.XXX-XX' });
    }

    next();
};

const validateDataNascimento = (request, response, next) => {
    const { body } = request;
    const dateOfBirthPattern = /^\d{2}\/\d{2}\/\d{4}$/;

    if (body.dateOfBirth === undefined) {
        return response.status(400).json({ message: 'O campo "data de nascimento" é obrigatório' });
    }

    if (!dateOfBirthPattern.test(body.dateOfBirth)) {
        return response.status(400).json({ message: 'Por favor, insira uma data de nascimento válida no formato DD/MM/YYYY' });
    }

    next();
};

const validateCEP = (request, response, next) => {
    const { body } = request;
    const cepPattern = /^\d{5}-\d{3}$/;

    if (body.cep === undefined) {
        return response.status(400).json({ message: 'O campo "CEP" é obrigatório' });
    }

    if (!cepPattern.test(body.cep)) {
        return response.status(400).json({ message: 'Por favor, insira um CEP válido no formato XXXXX-XXX' });
    }

    next();
};

module.exports = {
    validateFieldPrimeiroNome,
    validateFieldSobrenome,                                                                                                                                                       
    validateNumeroTelefone,
    validateEmail,
    validateCPF,
    validateDataNascimento,
    validateCEP,
};