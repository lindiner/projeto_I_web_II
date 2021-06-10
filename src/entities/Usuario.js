
export class Usuario {
    private id: number = 0 
    private nome: string = ""
    private telefone: string = ""
    private email: string = "";
    private senha: string  = ""
    private perfil_id: number = 0
    private cpf: string = ""


    constructor(props?:Omit<Usuario, 'id'>, id?: number ){
        Object.assign(this,props)
        
        if(id)
            this.id = id
    }

    setId(id: number){
        this.id = id;
    }
    setNome( nome:string) {
        this.nome = nome;
    }
    setTelefone(telefone :string) {
        this.telefone = telefone;
    }
    setEmail(email:string) {
        this.email = email;
    }
    setSenha(senha :string) {
        this.senha = senha;
    }
    
    setPerfilId(perfil_id :number) {
        this.perfil_id = perfil_id;
    }

    setCpf(cpf :string) {
        this.cpf = cpf;
    }

    setCreatedAt(date :Date) {
        this.created_at = new Date(date)
    }
    setUpdatedAt(date :Date) {
        this.updated_at = new Date(date)
    }

    getId():number{
        return Number(this.id)
    }
    getNome():string {
        return this.nome
    }
    getTelefone():string {
        return this.telefone
    }
    getEmail():string{
        return this.email
    }
    getSenha():string{
        return this.senha
    }
    getPerfilId():number{
        return this.perfil_id
    }

    getCpf():string {
        return this.cpf;
    }

    getCreatedAt():Date{
        return new Date(this.created_at ? this.created_at:0)
    }
    getUpdatedAt():Date{
        return new Date(this.created_at ? this.created_at:0)
    }
}