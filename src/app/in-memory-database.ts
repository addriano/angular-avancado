import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category} from "./pages/categories/shared/category.model";

export class inMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {id: 1, nome: 'Moradia', description: 'Pagamentos de Contas da casa'},
            {id: 2, nome: 'Saúde', description: 'Plano de Saúde'},
            {id: 3, nome: 'Lazer', description: 'Cinema, parques, praia'},
            {id: 4, nome: 'Salário', description: 'Recebimento de salário'},
            {id: 5, nome: 'Freelas', description: 'Trabalhos como freelancer'}
        ];

        return { categories }
    }
}