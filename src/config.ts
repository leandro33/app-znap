export interface StatusType {
    id: string
    name: string
    propName: string
    corban?: boolean
    approval?: boolean
    icon?: string
}

export const USUARIO_SISTEMA = 1
export const USUARIO_REVENDA = 2

// AUTH
export const BASE_API_URL = import.meta.env.VITE_API_URL
export const API_KEY = import.meta.env.VITE_API_KEY
export const COCKPIT_URL = import.meta.env.VITE_COCKPIT_URL
export const LOGIN_PATH = "/login"
export const TWO_FACTOR_PATH = "/auth/twoFactorCode"
export const ME_PATH = "/auth/me"
export const LOGOUT_PATH = "/auth/logout"
export const FORGOT_PASSWORD = "/usuarios/recuperar-senha"
export const CHANGE_PASSWORD = "/auth/change_password"
export const RESET_PASSWORD = "/usuarios/resetar-senha"
// export const REFRESH_TOKEN = "/auth/refresh"
export const REFRESH_TOKEN = "/token"
export const REGISTER_USER = "/auth/register"
export const FIRST_ACCESS = "/auth/inbursa_first_access"

// MESSAGES
export const MSG_EQUAL_PWD_ERROR = "As senhas devem ser idênticas em ambos os campos"
export const REQUEST_ERROR_MSG = "Não foi possível realizar a requisição. Tente novamente"
export const DELETED_ROLE = "Perfil de acesso deletado com sucesso"
export const ADDED_ROLE = "Perfil de acesso adicionado com sucesso"
export const UPDATED_ROLE = "Perfil de acesso atualizado com sucesso"
export const DIALOG_DELETE = "Tem certeza que deseja deletar esse ítem?"
export const DIALOG_DELETE_DESCRIPTION = "Essa ação não poderá ser disfeita!"
export const ERROR_SELECT_SYSTEM = "Um sistema deve ser selecionado"
export const EXPIRED_TOKEN = "Sessão expirada. Faça o login novamente."
export const EMAIL_OR_INVALID_PASS_1 = "E-mail..."
export const EMAIL_OR_INVALID_PASS_2 = "...ou senha inválidos!"
export const INVALID_EMAIL = "E-mail inválido"
export const NOT_FOUND_RESULTS = "Resultados não encontrados."
export const NOT_INFORMED = "Não informado."
export const ADDRESS_NOT_FOUND = "Endereço não encontrado"
export const SELECT_LINK_TYPE = "Selecione o tipo de vínculo"
export const ADD_CERTIFICATE = "Adicione pelo menos 1 certificado"
export const TOKEN_EXPIRED = "Token expirado"
export const INVALID_FILE_FORMAT = "Formato de arquivo inválido"
export const CONFIRM_REFRESH_PAGE = "Ao atualizar a página, os dados preenchidos não serão salvos.\nTem certeza que deseja continuar?"
export const USER_NOT_CORBAN = "Você não está cadastrado como um usuário Corban"
export const USER_NOT_CERTIFICATE = "Você não possui nenhum certificado em nossa base de dados."
export const SELECT_STATUS = "Selecionar status"
export const CANCEL_SAVE = "Tem certeza que deseja cancelar?"
export const CANCEL_SAVE_DESCRIPTION = "Essa ação não poderá ser desfeita e todas informações preenchidas sem salvar serão perdidas"
export const NOT_FOUND = "Não encontrado"
export const IMPOSSIBLE_SAVE_ADDRESS = "Não é possível salvar um novo endereço."
export const SELECT_ROLE = "Selecione um perfil de acesso"
export const USER_NOT_FOUND = "Usuário não encontrado"
export const CERTIFICATES_NOT_FOUND = "Certificados não encontrados"
export const SELECT_REPROVE_OPTION = "Selecione pelo menos 1 motivo"
export const CONFIRM_APPROVAL_CORBAN = "Confirmar aprovação do Corban"
export const NONE_PEP = "Não sou e não tenho parente PEP"
export const FAMILY_PEP = "Tenho parente PEP"
export const IM_PEP = "Sou PEP"
export const SELECT_REJECT_OPTION = "O motivo da reprovação precisa estar selecionado"
export const TITLE_INACTIVE_CONSTRAINT = "Certeza que deseja inativar tipo de restritivo?"
export const EXIT_WITHOUT_SAVING = "Essa ação não poderá ser desfeita e todos os dados não salvos anteriormente serão perdidos"
export const MAX_SCORE_MSG = "O valor deve ser entre 0 à 1000"
export const MAX_RISK_MSG = "O valor deve ser entre 0 à 100"
export const REQUIRED_FIELD = "Campo obrigatório"
export const INVALID_DOCUMENT = "Documento inválido"
export const INVALID_PERCENT = "A porcentagem de ser de 0 a 100"
export const INVALID_CEP_LENGTH = "Número de dígitos do CEP excedido!"
export const LIMIT_HOLDERS = "Você atingiu o máximo de acionistas"
export const LIMIT_ADDRESSES = "Você atingiu o máximo de endereços"
export const IMPOSSIBLE_ACCESS_PAGE = "Não foi possível acessar esta página"
export const NEED_AUTH = "Você precisa de autorização para acessar esta página"
export const NEED_ANSWER = "Você deve responder esta questão"
export const REQUIRED_ATTACHMENT = "Anexo obrigatório"
export const CHECK_DEFAULT_ADDRESS = "Selecione apenas um endereço para ser o principal."
export const CHECK_DEFAULT_BANK = "Selecione apenas um banco para ser o principal."
export const CHECK_DEFAULT_CONTACT = "Selecione apenas um contato para ser o principal."
export const RISK_SAVED = "Análise salva com sucesso!"
export const TITLE_PARAMETER = "Certeza que deseja desativar esse parâmetro?"
export const MSG_PARAMETER = "Os sistemas vinculados serão afetados por essa mudança."
export const MAX_SIZE_MSG = "Limite máximo de 3MB por arquivo"
export const REGISTER_SUCCESS_MSG = "Cadastro realizado com sucesso!"
export const NO_COMMENTS = "Sem comentários."
export const TITLE_INACTIVE = "Certeza que deseja desativar?"
export const DELETED_FEE_TABLE = "Tabela de taxas deletada com sucesso!"
export const ADD_FEE_TABLE = "Tabela de taxas adicionada com sucesso!"
export const SUBSIDIARY_SUBMIT = {
    ELEGIBILITY_TYPE: "O campo tipo de elegibilidade é obrigatório",
    COMUNICATION_TYPE: "O campo tipo de comunicação para formalização é obrigatório",
    LOGO_REQUIRE: "Imagem de logomarca é obrigatório.",
    LOGO_TYPE: "Adicione um Arquivo de imagem válido (jpeg, png).",
    LOGO_FORMAT: ["image/jpeg", "image/png"],
}
export const PRODUCT_SUBMIT = {
    PRODUCT_REQUIRE: "O campo produto é obrigatorio",
}
export const SUBPRODUCT_SUBMIT = {
    SUBPRODUCT_REQUIRE: "O campo subproduto é obrigatorio",
}
export const CORBAN_SUBMIT = {
    CORBAN_REQUIRE: "O campo corban é obrigatorio",
}
export const COLLABORATOR_SUBMIT = {
    COMPANY_CODE: "Campo company code é obrigatório",
    COMPANY: "Campo company é obrigatório",
    ADMISSION_DATE: "Campo data de admissão é obrigatório",
    BIRTH_DATE: "Campo data de nascimento é obrigatório",
    REGISTRATION: "Campo matricula é obrigatório",
    STATUS: "Campo status é obrigatório",
}
export const COMPANY_SUBMIT = {
    EMAIL_DOMAIN: "Campo dominio e-mail é obrigatório",
    SUBSIDIARY_ID: "Campo id da empresa associada é obrigatório",
    COMPANY_CODE: "Campo company code é obrigatório",
    DUE_DATE: "Campo dia de vencimento é obrigatório",
    TOKEN_TYPE: "Campo tipo de token é obrigatório",
    GROUP_CODE: "Campo group code é obrigatório",
    CUTTING_DAY: "Campo dia de corte é obrigatório",
    STATE_UF: "Campo estado (uf) é obrigatório",
}
export const CREDIT_LIFE_INSURANCE_VALIDATION = {
    PRODUCT: "O campo produto é obrigatório",
    SUBPRODUCT: "O campo subproduto é obrigatório",
    PROPOSAL_TYPE: "O campo tipo de proposta é obrigatório",
    MINIMUM_VALUE: "O campo valor mínimo é obrigatório",
    MAXIMUM_VALUE: "O campo valor máximo é obrigatório",
    PERCENTAGE: "O campo percentual do seguro é obrigatório",
}
export const CORBAN_REGISTER_DATA_VALIDATE = {
    NAME: "O campo nome é obrigatório",
    EMAIL: "O campo e-mail é obrigatório",
    PHONE: "O campo celular é obrigatório",
}
export const SELECT_DOCUMENT_TYPE: string = "Selecione um tipo de documento"
export const TYPE_DOCUMENT_NUMBER: string = "Digito o nº do documento"

export const COMPANY_IMPORTS = ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]
export const FEES_DELETE = "Certeza que deseja deletar esse parcelamento?"
export const VALIDATION_DELETE = "Certeza que deseja deletar essa validação?"
export const DIRECTOR_ONE_SIGNATURE_VALIDATION = "O Campo Diretor 1 é obrigatório"
export const DIRECTOR_TWO_SIGNATURE_VALIDATION = "O Campo Diretor 2 é obrigatório"
export const WITNESS_SIGNATURE_VALIDATION = "O Campo Testemunha é obrigatório"

// API ROUTES
export const USER = "/usuarios"
export const PERSONAS = "/personas"
export const CONSTRAINTS = "/constraints"
export const ROLE = "/roles"
export const SYSTEM = "/systems"
export const ENTITY = "/entities"
export const ENTITY_TYPE = "/entity_types"
export const ENTITY_PRE_REGISTER = "/entities/pre-register"
export const ROLE_SYSTEM = "/roles/system"
export const COMPANY = "/companies"
export const COLLABORATOR = "/collaborators"
export const SUBSIDIARY = "/subsidiaries"
export const PRODUCT = "/products"
export const SUBPRODUCTS = "/product-children"
export const CCB = "/ccbs"
export const COMUNICATION_FORMATS = "/message_formats"
export const COMUNICATION_TYPE = "/messages"
export const COMUNICATION_FORMAT_CONTENT = "/message_format_contents"
export const APPROVAL_STEP = "/approval_steps"
export const ELEGIBILITY_TYPE = "/elegibility_types"
export const PROPOSAL_TYPE = "/proposal_types"
export const FORMALIZATION_TYPE = "/formalization_types"
export const REJECT_REASONS = "/reproofs"
export const REJECT_CORBAN = USER + "/reproovs"
export const USERTYPE = "/usuarios_tipo"
export const ADDRESS = "/address"
export const CERTIFICATE = "/certificates"
export const VISIT_REPORTS = "/visit-report"
export const CUSTOMERS = "/clients"
export const ADDRESSES = "/addresses"
export const EXTERNAL_SERVICES = "/external-services"
export const PARAMETERS = "/parameters"
export const RISK_VALIDATION = "/risk-validation"
export const COMMITTEE_VALIDATION = "/committee-validation"
export const FEE = "/fees"
export const BASIC_VALIDATION_RULES = "/basicvalidationrules"
export const VALIDATION = "/validations"
export const CREDIT_LIFE_INSURANCE = "credit-life-insurance"
export const MASTER_USERS = "/user-master"
export const BLACKLIST = "/blacklist"
export const BANKS = "/banks"
export const AGENCIES = "/agencies"
export const ECONOMIC_ACTIVITY = "/economic-activity"
export const CNAE = "/cnae"
export const NOT_PERMISSIOM = "/not-permission"
export const COMPLIANCE = "/compliance"
export const LEGAL_DOCUMENT = "/legaldocument"
export const TERMS_OF_USE = "/terms_of_use"
export const PRIVACY_POLICE = "/privacy_policy"
export const PROFESSIONAL = "/professional"
export const ADD_ADDRESS = "/add-address"
export const CONTACT = "/contact"
export const DOCUMENTS_TYPES = "/document-type/search"

export const STATUS: StatusType[] = [
    { id: "inativo", name: "inativo", corban: false, propName: "INACTIVE" },
    { id: "inativo", name: "inativo", corban: true, propName: "ENTITY_INACTIVE" },
    { id: "ativo", name: "ativo", corban: false, propName: "ACTIVE" },
    { id: "ativo", name: "ativo", corban: true, propName: "ENTITY_ACTIVE" },
    { id: "approved", name: "Corban Aprovado", corban: true, approval: true, propName: "APPROVED" },
    { id: "reproved", name: "Usuario Reprovado", corban: false, propName: "REPROVED" },
    { id: "reproved", name: "Corban Reprovado", corban: true, approval: true, propName: "ENTITY_REPROVED" },
    { id: "invitation_send", name: "Convite Enviado", corban: false, propName: "INVITATION_SEND" },
    { id: "certificate_validation", name: "Validação Certificado", corban: false, propName: "CERTIFICATE_VALIDATION" },
    { id: "biometric_validation", name: "Validação Biometria", corban: false, propName: "BIOMETRIC_VALIDATION" },
    { id: "requested_register", name: "Cadastro Solicitado", corban: true, propName: "ENTITY_REQUESTED_REGISTER" },
    { id: "started_register", name: "Cadastro Iniciado", corban: true, propName: "ENTITY_STARTED_REGISTER" },
    { id: "restrictive_validation", name: "Validação de restritivos", corban: true, propName: "ENTITY_RESTRICTIVE_VALIDATION" },
    { id: "risk_validation", name: "Validação de risco", corban: true, propName: "ENTITY_RISK_VALIDATION" },
    { id: "committee_validation", name: "Validação do comitê", corban: true, propName: "ENTITY_COMMITTEE_VALIDATION" },
    { id: "entity_register_validation", name: "Validação de Registro", propName: "ENTITY_REGISTER_VALIDATION" },
    { id: "expired", name: "Expirado", corban: true, propName: "EXPIRED" },
    { id: "finished", name: "Finished", corban: true, propName: "FINISHED" },
    { id: "register_validation", name: "Validação de cadastro", corban: false, propName: "REGISTER_VALIDATION" },
    { id: "blocked", name: "Bloqueado", corban: false, propName: "BLOCKED" },
    { id: "draft", name: "Rascunho", propName: "DRAFT" },
    { id: "document_signing", name: "Ass. Documentos", propName: "DOCUMENT_SIGNING" },
    { id: "in_analysis", name: "Em análise", approval: true, propName: "IN_ANALYSIS" },
    { id: "document_signed", name: "Assinado", propName: "SINGNED" },
    { id: "fail_singing", name: "Falha na solicitação de assinaturas", propName: "FAIL_SINGING" },
    { id: "processing", name: "Processando", approval: true, propName: "PROCESSING" },
    { id: "rejected", name: "Rejeitado", propName: "REJECTED" },
    { id: "waiting_singing", name: "Aguardando Assinatura", propName: "WAITING_SINGING" },
    { id: "risk_validation", name: "Validação de Risco", propName: "RISK_VALIDATION" },
    { id: "awaiting_signature", name: "Aguardando assinaturas", propName: "AWAITING_SIGNATURE" },
    { id: "pending", name: "Pendente", propName: "PENDING" },
    { id: "success", name: "Sucesso", approval: true, propName: "SUCCESS" },
    { id: "fail", name: "Falha", approval: true, propName: "FAIL" },
    { id: "completed", name: "Sucesso", approval: true, propName: "COMPLETED" },
    { id: "approved", name: "Aprovado", propName: "APPROVED_COMPLIANCE" },
    { id: "reproved", name: "Reprovado", propName: "REPROVED_COMPLIANCE" },
    { id: "not", name: "Não", propName: "NOT_COMPLIANCE" },
    { id: "yes", name: "Sim", propName: "YES_COMPLIANCE" },
    { id: "analising", name: "Analisando", propName: "ANALISING_COMPLIANCE" },
    { id: "pre_registration", name: "Pré Registro", propName: "PRE_REGISTRATION" },
    { id: "potential", name: "Potencial", propName: "POTENTIAL" },
    { id: "inner_reproved", name: "Reprovado por Política interna", propName: "INNER_REPROVED" },
    { id: "waiting_inbursa", name: "Aguardando aprovação Inbursa", propName: "WAITING_INBURSA" },
    { id: "suspended", name: "Suspenso", propName: "SUSPENDED" },
    { id: "created", name: "criado", propName: "CREATED" },
    { id: "used", name: "utilizado", propName: "USED" },
    { id: "refused", name: "cancelado", propName: "REFUSED" },
]
// STATUS DATATABLE
export const STATUS_DATATABLE: Record<string, string> = {}

export const SUBSIDIARY_TABS = {
    SUBSIDIARY_DATA: { name: "dados-da-empresa", title: "Dados da empresa" },
    COMPANIES: { name: "companies", title: "Companies" },
    COLLABORATORS: { name: "colaboradores", title: "Colaboradores" },
    PRODUCTS: { name: "produtos", title: "Produtos" },
    CORBANS: { name: "corbans", title: "Corbans" },
    VALIDATION: { name: "validation", title: "Validações" },
}

export const COMPANY_TABS = {
    COMPANY_DATA: { name: "dados-da-company", title: "Dados da company" },
    SPECIAL_TAX: { name: "taxas-especiais", title: "Taxas Especiais" },
}

export const COLLABORATOR_TABS = {
    COLLABORATOR_DATA: { name: "dados-do-colaborador", title: "Dados do colaborador" },
    SPECIAL_TAX: { name: "taxas-especiais", title: "Taxas Especiais" },
}

export const BANKS_TABS = {
    BANKS_DATA: { name: "dados-bancarios", title: "Dados Bancários" },
    AGENCIES: { name: "agencias", title: "Agências" },
}

export const TYPE_ADDRESS_OPTIONS = [
    { value: "residencial", text: "Residencial" },
    { value: "billing", text: "Cobrança" },
    { value: "comercial", text: "Comercial" },
    { value: "mailing", text: "Correspondência" },
]

export const ACCOUNT_TYPE_OPTIONS = [
    { value: "corrente", text: "Corrente" },
    { value: "poupanca", text: "Poupança" },
]

export const GENDER_TYPE = [
    { id: "male", name: "Masculino" },
    { id: "female", name: "Feminino" },
    { id: "not_informed", name: "Prefiro não informar" },
]

export const MARITAL_STATUS_TYPE = [
    { id: "single", name: "Solteiro(a)" },
    { id: "married", name: "Casado(a)" },
    { id: "divorced", name: "Divorciado(a)" },
    { id: "widowed", name: "Viúvo(a)" },
]

export const NATIONALITY_TYPE = [
    { id: "brazilian", name: "Brasileiro(a)" },
    { id: "foreigner", name: "Estrangeiro(a)" },
]

export const CUSTOMER_STATUS_TYPE = [
    { id: "potential", name: "Potencial" },
    { id: "pre_registration", name: "Pré-Cadastro" },
]

export const COMPLIANCE_PEP_TYPE = [
    { value: "pep", text: "É PEP" },
    { value: "family_member", text: "tem parente PEP" },
    { value: "none", text: "Não é e não tem parente PEP" },
]

export const COMPLIANCE_PEP_PARENTESIS_TYPE = [
    { value: "irma", text: "Irmã(o)" },
    { value: "filho", text: "Filho(a)" },
    { value: "mae", text: "Mãe" },
    { value: "pai", text: "Pai" },
    { value: "outro", text: "Outro" },
]

export const DOCUMENTS_TYPES_OPTIONS = [
    { value: "rg", text: "RG" },
    { value: "cnh", text: "CNH" },
    { value: "cpf", text: "CPF" },
    { value: "rne", text: "RNE" },
    { value: "carteira militar", text: "Carteira Militar" },
    { value: "selfie", text: "Selfie" },
]

export const CORBAN_VISIT_REPORT = {
    REGISTER_DATA: {
        name: "registerData",
        title: "Dados do correspondente",
        section: "Dados do correspondente",
    },
    MAIN_PRODUCTS: {
        name: "mainProductsData",
        title: "Principais produtos",
        section: "Principais Produtos",
    },
    NECESSARY_ITEMS: {
        name: "mainItensData",
        title: "Itens Necessários",
        section: "Principais itens necessários para atender as normativas dos órgãos reguladores",
    },
    SERVICE: {
        name: "serviceData",
        title: "Atendimento",
        section: "Atendimento (avaliar a aderência do atendimento no ato da oferta)",
    },
    OBSERVATIONS: {
        name: "generalObservationsData",
        title: "Observações",
        section: "Observações Gerais",
    },
    SIGNATURES: {
        name: "signatureDocuments",
        title: "Assinaturas",
        section: "Assinaturas",
    },
    NON_COMPILANCE: {
        section: "Medidas para itens em não conformidade",
    },
    CORRESPONDENTS_NEEDS: {
        section: "Necessidades do Correspondente",
    },
}

export const VISIT_REPORT_STATUS = {
    finished: "Ativo",
    pending: "Rascunho",
    expired: "Expirado",
    active: "Ativo",
    inactive: "Inativo",
    undefined: "Falha na solicitação de assinaturas",
    failed: "Falha na solicitação de assinaturas",
    unknown: "Falha na solicitação de assinaturas",
    processing: "Processando documento",
    awaiting_signature: "Aguardando assinaturas",
    "Não Assinado": "Não Assinado",
    Assinado: "Assinado",
}

export const DOCUMENTS_LABEL = {
    CARTEIRA_MILITAR: "Carteira Militar",
    RG: "RG",
    CNH: "CNH",
    SELFIE: "Selfie",
    CPF: "CPF",
    RNE: "RNE",
}

// SETTINGS
export const SMALL_DELAY = 250
export const MEDIUM_DELAY = 500
export const LARGE_DELAY = 1000
export const MIN_PASSWORD_LENGTH = 6
export const MAX_PASSWORD_LENGTH = 20
export const MIN_LASTNAME_LENGTH = 2
export const MAX_LASTNAME_LENGTH = 200
export const MAX_DESCRIPTION_LENGTH = 500
export const HOME_ADDRESS_TYPE = 1
export const BUSINESS_ADDRESS_TYPE = 4
export const CORRESPONDENCE_ADDRESS_TYPE = 3
export const INVALID_CREDENTIALS = 432
export const TYPE_CPF = "cpf"
export const TYPE_CNPJ = "cnpj"
export const IS_PEP = "pep"
export const PEP_PARENTS = "family_member"
export const NOT_PEP = "none"
export const ID_COMPLIANCE_TEMPLATE = 2
export const ID_COMPLIANCE_REPORT = 2
export const LOADER_DELAY = 500
export const MIN_NAME_LENGTH = 3
export const MAX_NAME_LENGTH = 150
export const MAX_FILE_UPLOAD = 3245728 // 3MB
export const ENTITY_TYPE_CORBAN = 1
export const ENTITY_TYPE_SUB = 2
export const SYSTEM_ID_INBURSA_COCKPIT = 1
export const SYSTEM_ID_PORTAL_CORBAN = 2
export const SYSTEM_ID_PORTAL_CLIENTE = 3
export const USER_TYPE_INBURSA = 1
export const USER_TYPE_CORBAN = 2
export const USER_ROLE = '/roles'
export const PEP = {
    NONE: "none",
    PEP: "pep",
    FAMILIAR: "family_member",
}
export const REPRESENTATIVE = {
    PARTNER: "partner_shareholder",
    DIRECTOR: "director",
    PROCURATOR: "procurator",
    CO_DEBTOR: "debtor",
    WITNESS: "witness",
}
export const LITERAL_REPRESENTATIVE = {
    PARTNER: "Representante Legal",
    DIRECTOR: "Diretor",
    PROCURATOR: "Procurador",
    CO_DEBTOR: "Devedor Solidário",
    WITNESS: "Testemunha",
}
export const TYPE_PEOPLE = {
    LEGAL: 1,
}
export const APPROVAL_STATUS: Record<string, string> = {
    RESTRICTIVE: "restrictive_validation",
    RISK_VALIDATION: "risk_validation",
    REGISTER_VALIDATION: "register_validation",
    COMMITTEE_VALIDATION: "committee_validation",
    DOCUMENT_SIGNING: "document_signing",
    ACTIVE: "active",
}
export const SEARCH_PATH: string = "search"
export const COLORS = {
    PRIMARY: "#007bff",
}

// ROLES
export const ROLES = {
    MASTER_CORBAN: "master-corban",
    SUPERVISOR_CORBAN: "supervisor-corban",
    VENDEDOR_CORBAN: "vendedor-corban",
    DIGITADOR_CORBAN: "digitador-corban",
}

export const QUOD_RESPONSE = {
    DONT_CONFIRMED: "dont_confirmed",
    PENDING: "pending",
    CONFIRMED: "confirmed",
    UNKNOWN: "Desconhecido",
}

// Set DataTable status props
STATUS.forEach((s: StatusType) => {
    STATUS_DATATABLE[s.propName] = s.name !== undefined && s.name !== "" ? s.name : s.id
})

export const STATUS_CODE = {
    OK: 200, // A requisição foi bem-sucedida.
    CREATED: 201, // O recurso foi criado com sucesso.
    ACCEPTED: 202, // A requisição foi aceita para processamento, mas não foi concluída.
    NO_CONTENT: 204, // A requisição foi bem-sucedida, mas não há conteúdo no corpo da resposta.
    BAD_REQUEST: 400, // A requisição foi inválida ou incorreta.
    UNAUTHORIZED: 401, // O usuário não está autenticado.
    FORBIDDEN: 403, // O usuário não tem permissão para acessar o recurso.
    NOT_FOUND: 404, // O recurso solicitado não foi encontrado.
    METHOD_NOT_ALLOWED: 405, // O método HTTP não é permitido para o recurso solicitado.
    CONFLICT: 409, // Conflito com o estado atual do recurso.
    GONE: 410, // O recurso solicitado não está mais disponível e não será restaurado.
    PRECONDITION_FAILED: 412, // A pré-condição fornecida na requisição falhou.
    UNPROCESSABLE_ENTITY: 422, // A requisição foi bem-formada, mas não pôde ser processada devido a erros de validação.
    TOO_MANY_REQUESTS: 429, // Muitas requisições foram enviadas em um curto período de tempo.
    INTERNAL_SERVER_ERROR: 500, // Ocorreu um erro interno no servidor.
    BAD_GATEWAY: 502, // O servidor recebeu uma resposta inválida ao tentar acessar outro servidor.
    SERVICE_UNAVAILABLE: 503, // O servidor está temporariamente indisponível, geralmente devido a manutenção ou sobrecarga.
    GATEWAY_TIMEOUT: 504, // O servidor não conseguiu uma resposta a tempo de outro servidor.
}

export const DOCUMENT_TYPE = {
    RG: "rg",
    CNH: "cnh",
    CPF: "cpf",
    SELFIE: "selfie",
    CARTEIRA_MILITAR: "carteira_militar",
    CARTEIRA_MILITAR_STR: "carteira militar",
    RNE: "rne",
}

export const FILES_TYPE = {
    FILE: "file",
    FRONT: "front",
    BACK: "back",
    NAME: "name",
}

export const FILES_SIDES = {
    FRENTE: "Frente",
    VERSO: "Verso",
    FRONT: "front",
    VERSE: "verse",
}

export const FILTER_STATUS = [
    { value: "PRE_SALES", text: "Pré-Vendas" },
    { value: "REGISTRATION", text: "Cadastro" },
    { value: "RISK", text: "Risco" },
    { value: "PROCESSING", text: "Processamento" },
    { value: "DISBURSEMENT", text: "Desembolso" },
    { value: "POST_SALES", text: "Pós-Vendas" },
]

export const MODULES: Record<string, string> = {
    CUSTOMERS: "clients",
    SUBSIDIARIES: "subsidiaries",
    COMPANIES: "companies",
    USERS: "users",
    ENTITIES: "entities",
    FEES: "fees",
    PRODUCTS: "products",
    INSTALLMENTS: "installments",
    CORBANS: "corbans",
    CORBAN_USERS: "corban-users",
    CORBAN_VISIT_REPORT: "visit-report-entities",
    RISK_VALIDATION: "risk-validation",
    COMMITTEE_VALIDATION: "committee-validations",
    SUBPRODUCTS: "product-children",
    CONSTRAINTS: "constraints",
    ELEGIBILITY_TYPES: "elegibility-types",
    COMUNICATION_TYPE: "messages",
    APPROVAL_ENTITY: "approval-entities",
    PARAMETERS: "parameters",
    BANKS: "banks",
    APPROVAL_CORBAN: "approval-entities",
    APPROVAL_USER: "approval-users",
    AGENCIES: "agencies",
    INBURSA_USERS: "inbursa-users",
    ROLES: "roles",
    LOGS: "logs",
    FUNNEL: "sales-funnel",
    PROPOSALHISTORY: "proposal-history",
}

export const PROPOSAL_DETAIL_TABS = {
    PROPOSAL: { name: "proposal", title: "Proposta" },
    CUSTOMER: { name: "customer", title: "Cliente" },
    SELLER: { name: "seller", title: "Vendedor" },
    PORTREFIN: { name: "related-proposal", title: "Proposta Relacionada" },
    DOCUMENTS: { name: "document", title: "Documentos" },
}
