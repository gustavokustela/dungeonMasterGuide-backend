import { Component, OnInit, ViewChild } from '@angular/core';

// Service
import { MesaDetalheServiceService } from './mesa-detalhe-service.service';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { MesaVO } from 'src/app/base/vo/mesa';
import { JSONP_ERR_NO_CALLBACK } from '@angular/common/http/src/jsonp';
import { AnimationQueryMetadata } from '@angular/animations';
import { PessoaVO } from 'src/app/base/vo/pessoa';

@Component({
  selector: 'app-mesa-detalhe',
  templateUrl: './mesa-detalhe.component.html',
  styleUrls: ['./mesa-detalhe.component.css'],
  providers: [MesaDetalheServiceService]
})
export class MesaDetalheComponent implements OnInit {

  mesaDetalhe: any;
  mesajogadores: Array<PessoaVO> = new Array<PessoaVO>();
  mesaFrag: any;
  loading = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.fragment.subscribe(params => {
      this.mesaFrag = params;
      this.mesaDetalhe = this.mesaFrag.mesaDetalhe;
    },
      error => {
        console.log(error);
      });
  }

}
