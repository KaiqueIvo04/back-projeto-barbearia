Feature: Registrar Client

    #REGISTER - ONE Client
    @regression @back @standard @post_Clients
    Scenario: Assegurar que um Client foi registrado com sucesso
        Given entrar no sistema
        When criar novo Client com os dados fornecidos
        Then o sistema deverá registrar o Client e mostrar uma mensagem de sucesso na operação