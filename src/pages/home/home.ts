import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data_Atual = moment().format('DD/MM/YYYY');
  public nome_guia: any;
  public anuncie: any = [];
  public Banner: any = [];
  public Cards: any = [
    {
      "name": "Onde Comer",
      "img": "/assets/imgs/comer.jpg"
    },
    {
      "name": "Onde Ir",
      "img": "/assets/imgs/festa.jpg"
    },
    {
      "name": "Onde Beber",
      "img": "/assets/imgs/beber.jpg"
    }];

  constructor(public navCtrl: NavController) {

    this.nome_guia = "Guia Valéria"

    this.getImgs();

  }


  getImgs() {
    for (var x = 1; x <= 1; x++) {
      this.Banner = [{ "img": "/assets/imgs/" + x + ".png" }]
    }

    var frases = [
      "Anuncie você também",
      "Vai ficar fora dessa?",
      "Simples de usar, difícil é não vender.",
      "Torne-se um destaque!",
      "Buque seu emprego desejado!",
      "Mostre sua loja para o mundo"];

    var counter = 0;
    var timer = setInterval(function () {
      if (counter >= 5) {
        clearInterval(timer);
      }
      this.anuncie = frases[counter++];
    }, 2000);

  }




}


