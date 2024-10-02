import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos = [
    { nome: 'Celular', preco: 2000.00, descricao: 'S23 512gb', emEstoque: true },
    { nome: 'Televisão', preco: 5000.00, descricao: 'Samsung 32 polegadas', emEstoque: false },
    { nome: 'Notebook', preco: 3000.00, descricao: 'Samsung Book 3', emEstoque: true }
  ];
}
