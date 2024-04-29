const defaultDatabase = [
    {
        "id": 0,
        "name": "Alexandre Souza",
        "cpf": "104.444.076-77",
        "cfm": "555555",
        "rg": "744",
        "birth_date": "2024-04-09",
        "email": "alexandrehg2001@gmail.com",
        "phone": "11983674446",
        "cep": "08.150-020",
        "street": "Rua José pessota",
        "number": "593",
        "uf": "AC",
        "city": "SÃO PAULO",
        "occupation": "Ortopedista",
        "status": true,
        "address": "Rua José pessota, 593 - 08.150-020",
        "created_at": "2024-4-29",

    },
    {
        "id": 1,
        "name": "Maria Santos",
        "status": true,
        "cpf": "555.444.333-22",
        "rg": "5554443-4",
        "birth_date": "1976-07-25",
        "email": "maria.santos@example.com",
        "phone": "(31) 98765-4321",
        "address": "Rua das Palmeiras, 789, Belo Horizonte, MG",
        "street": "Rua das Palmeiras",
        "number": "789",
        "cep": "30140-040",
        "uf": "MG",
        "city": "Belo Horizonte",
        "cfm": "DEF67890",
        "occupation": "Clínica Médica",
        "created_at": "2024-03-28",
    },
    {
        "id": 2,
        "name": "João Oliveira",
        "status": false,
        "cpf": "987.654.321-00",
        "rg": "9876543-2",
        "birth_date": "1990-10-20",
        "email": "joao.oliveira@example.com",
        "phone": "(21) 12345-6789",
        "address": "Avenida Principal, 456, Rio de Janeiro, RJ",
        "street": "Avenida Principal",
        "number": "456",
        "cep": "22010-010",
        "uf": "RJ",
        "city": "Rio de Janeiro",
        "cfm": "XYZ54321",
        "occupation": "Ginecologia e Obstetrícia",
        "created_at": "2024-03-28",
    },
    {
        "id": 3,
        "name": "Fernanda Lima",
        "status": true,
        "cpf": "999.888.777-66",
        "rg": "9998887-6",
        "birth_date": "1988-12-05",
        "email": "fernanda.lima@example.com",
        "phone": "(41) 12345-6789",
        "address": "Avenida das Águas, 321, Curitiba, PR",
        "street": "Avenida das Águas",
        "number": "321",
        "cep": "80010-010",
        "uf": "PR",
        "city": "Curitiba",
        "cfm": "JKL54321",
        "occupation": "Pediatria",
        "created_at": "2024-03-28",
    },
    {
        "id": 4,
        "name": "Carlos Souza",
        "status": false,
        "cpf": "111.222.333-44",
        "rg": "1112223-4",
        "birth_date": "1980-05-10",
        "email": "carlos.souza@example.com",
        "phone": "(51) 98765-4321",
        "address": "Rua dos Pinheiros, 567, Porto Alegre, RS",
        "street": "Rua dos Pinheiros",
        "number": "567",
        "cep": "90035-001",
        "uf": "RS",
        "city": "Porto Alegre",
        "cfm": "GHI67890",
        "occupation": "Dermatologia",
        "created_at": "2024-03-28",
    },
    {
        "id": 5,
        "name": "Pedro Oliveira",
        "status": false,
        "cpf": "777.888.999-00",
        "rg": "7778889-0",
        "birth_date": "1975-08-22",
        "email": "pedro.oliveira@example.com",
        "phone": "(81) 98765-4321",
        "address": "Rua das Oliveiras, 789, Recife, PE",
        "street": "Rua das Oliveiras",
        "number": "789",
        "cep": "50050-100",
        "uf": "PE",
        "city": "Recife",
        "cfm": "MNO12345",
        "occupation": "Psiquiatria",
        "created_at": "2024-03-28",
    },
    {
        "id": 6,
        "name": "Amanda Ferreira",
        "status": true,
        "cpf": "666.555.444-33",
        "rg": "6665554-3",
        "birth_date": "1992-04-18",
        "email": "amanda.ferreira@example.com",
        "phone": "(62) 12345-6789",
        "address": "Rua dos Coqueiros, 456, Goiânia, GO",
        "street": "Rua dos Coqueiros",
        "number": "456",
        "cep": "74000-010",
        "uf": "GO",
        "city": "Goiânia",
        "cfm": "PQR56789",
        "occupation": "Endocrinologia",
        "created_at": "2024-04-28",
    },
    {
        "id": 7,
        "name": "Lucas Oliveira",
        "status": true,
        "cpf": "222.333.444-55",
        "rg": "2223334-5",
        "birth_date": "1987-11-25",
        "email": "lucas.oliveira@example.com",
        "phone": "(85) 98765-4321",
        "address": "Rua das Palmeiras, 123, Fortaleza, CE",
        "street": "Rua das Palmeiras",
        "number": "123",
        "cep": "60010-010",
        "uf": "CE",
        "city": "Fortaleza",
        "cfm": "STU67890",
        "occupation": "Gastroenterologia",
        "created_at": "2024-04-28",
    },
    {
        "id": 8,
        "name": "Juliana Costa",
        "status": false,
        "cpf": "888.777.666-55",
        "rg": "8887776-5",
        "birth_date": "1984-06-30",
        "email": "juliana.costa@example.com",
        "phone": "(67) 12345-6789",
        "address": "Avenida Central, 789, Campo Grande, MS",
        "street": "Avenida Central",
        "number": "789",
        "cep": "79000-010",
        "uf": "MS",
        "city": "Campo Grande",
        "cfm": "UVW12345",
        "occupation": "Medicina de Emergência",
        "created_at": "2024-04-28",
    },
    {
        "id": 9,
        "name": "Ana Silva",
        "status": false,
        "cpf": "123.456.789-00",
        "rg": "1234567-8",
        "birth_date": "1985-03-15",
        "email": "ana.silva@example.com",
        "phone": "(11) 98765-4321",
        "address": "Rua das Flores, 123, São Paulo, SP",
        "street": "Rua das Flores",
        "number": "123",
        "cep": "17450-081",
        "uf": "SP",
        "city": "São Paulo",
        "cfm": "ABC12345",
        "occupation": "Cirurgia Geral",
        "created_at": "2024-03-28",
    },
]

export default defaultDatabase