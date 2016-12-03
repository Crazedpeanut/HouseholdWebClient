import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { JournalService } from '../service/journal.service';
import {Journal} from "../model/journal";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'journal',
  templateUrl: 'app/template/journal.template.html',
  providers: [ JournalService ]
})
export class JournalComponent implements OnInit{

  journal: Journal;

  constructor(private journalService: JournalService, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {

      this.route.params
          .switchMap((params: Params) => this.journalService.getJournalById(+params["id"]))
          .subscribe(jrnl => this.journal = jrnl);
  }
}
