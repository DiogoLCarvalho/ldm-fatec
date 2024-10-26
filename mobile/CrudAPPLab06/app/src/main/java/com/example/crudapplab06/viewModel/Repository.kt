package com.example.crudapplab06.viewModel

import com.example.crudapplab06.roomDB.Pessoa
import com.example.crudapplab06.roomDB.PessoaDataBase

class Repository(private val db: PessoaDataBase) {
    suspend fun upsertPessoa(pessoa: Pessoa){
        db.pessoaDao().upsertPessoa(pessoa)
    }

    suspend fun deletePessoa(pessoa: Pessoa){
        db.pessoaDao().deletePessoa(pessoa)
    }

    fun getAllPessoa() : List<Pessoa>{
        return db.pessoaDao().getAllPessoas()
    }

}