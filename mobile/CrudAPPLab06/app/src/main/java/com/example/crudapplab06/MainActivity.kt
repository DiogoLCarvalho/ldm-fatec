package com.example.crudapplab06

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.room.Room
import com.example.crudapplab06.roomDB.Pessoa
import com.example.crudapplab06.roomDB.PessoaDataBase
import com.example.crudapplab06.ui.theme.CrudAPPLab06Theme
import com.example.crudapplab06.viewModel.PessoaViewModel
import com.example.crudapplab06.viewModel.Repository
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.Divider
import androidx.compose.material3.TextField
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class MainActivity : ComponentActivity() {
    private val db by lazy {
        Room.databaseBuilder(
            applicationContext,
            PessoaDataBase::class.java,
            "pessoa.db"
        ).build()
    }

    private val viewModel by viewModels<PessoaViewModel>(
        factoryProducer = {
            object :  ViewModelProvider.Factory{
                override fun <T : ViewModel> create(modelClass: Class<T>): T {
                    return PessoaViewModel(Repository(db)) as T
                }
            }
        }
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            CrudAPPLab06Theme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    App(viewModel, this)
                }
            }
        }
    }
}



@Composable
fun App(viewModel: PessoaViewModel, mainActivity: MainActivity){

    var nome by remember {
        mutableStateOf("")
    }

    var telefone by remember {
        mutableStateOf("")
    }

    val pessoa = Pessoa(
        nome,
        telefone
    )

    var pessoaList by remember {
        mutableStateOf(listOf<Pessoa>())
    }

    viewModel.getPessoa().observe(mainActivity){
        pessoaList = it
    }

    Column(
        Modifier
            .background(Color.Black)
            .fillMaxWidth()
            .fillMaxHeight()
    ){
        Row(
            Modifier
                .padding(20.dp)
        ){

        }
        Row(
            Modifier
                .fillMaxWidth(),
            Arrangement.Center
        ) {
            Text(
                "App DataBase",
                fontFamily = FontFamily.SansSerif,
                fontSize = 30.sp,
                color = Color.White
            )
        }
        Row(
            Modifier
                .padding(20.dp)
        ){

        }
        Row(
            Modifier
                .fillMaxWidth(),
            Arrangement.Center
        ) {
            Column(
                Modifier
                    .fillMaxWidth(0.2f),
            ) {
                Text(
                    "Nome: ",
                    fontFamily = FontFamily.SansSerif,
                    fontSize = 16.sp,
                    color = Color.White
                )
            }
            Column(
                Modifier
                    .fillMaxWidth(0.8f)
            ) {
                TextField(
                    value = nome,
                    onValueChange = { nome = it },
                    label = {  },
                )
            }
        }
        Row(
            Modifier
                .padding(20.dp)

        ){

        }
        Row(
            Modifier
                .fillMaxWidth(),
            Arrangement.Center
        ) {
            Column(
                Modifier
                    .fillMaxWidth(0.2f),
            ) {
                Text(
                    "Telefone: ",
                    fontFamily = FontFamily.SansSerif,
                    fontSize = 16.sp,
                    color = Color.White
                )
            }
            Column(
                Modifier
                    .fillMaxWidth(0.8f)
            ) {
                TextField(
                    value = telefone,
                    onValueChange = { telefone = it },
                    label = {  },
                )
            }
        }
        Row(
            Modifier
                .padding(20.dp)

        ){

        }
        Row(
            Modifier
                .fillMaxWidth(),
            Arrangement.Center
        ){
            Button(
                onClick =  {
                    viewModel.upsertPessoa(pessoa)
                    nome = ""
                    telefone = ""
                }
            ) {
                Text(
                    "Cadastrar",
                    fontFamily = FontFamily.SansSerif,
                    fontSize = 16.sp,
                    color = Color.White
                )
            }
        }

        Row(
            Modifier
                .padding(20.dp)

        ){

        }
        Divider()
        Row(
            Modifier
                .padding(20.dp)

        ){

        }

        Row(Modifier.fillMaxWidth(), Arrangement.Center) {
            Column (Modifier.fillMaxWidth(0.5f),
                Arrangement.Center) {
                Text(text = "Nome")
            }
            Column (Modifier.fillMaxWidth(0.5f),
                Arrangement.Center) {
                Text(text = "Telefone")
            }
        }
        LazyColumn {
            items(pessoaList){
                pessoa ->
                Row(Modifier.fillMaxWidth().clickable { viewModel.deletePessoa(pessoa) }, Arrangement.Center) {
                    Column (Modifier.fillMaxWidth(0.5f),
                        Arrangement.Center) {
                        Text(text = "${pessoa.nome}")
                    }
                    Column (Modifier.fillMaxWidth(0.5f),
                        Arrangement.Center) {
                        Text(text = "${pessoa.telefone}")
                    }
                }
            }
        }
    }

}