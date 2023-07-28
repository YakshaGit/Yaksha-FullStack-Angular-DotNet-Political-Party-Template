import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PoliticalParty } from '../model/political-party.model';

@Component({
    selector: 'app-political-party',
    templateUrl: './political-party.component.html',
    styleUrls: []
})
export class PoliticalPartyComponent implements OnInit {
    parties: PoliticalParty[] = [];
    partyForm!: FormGroup;

    constructor() {}

    ngOnInit() {
        this.loadParties();
    }

    loadParties() {
        // write your logic here
    }

    editParty(party: any) {
        // write your logic here
    }

    createParty() {
        // write your logic here
    }

    deleteParty(id: number) {
        // write your logic here
    }


    searchByName(event: any) {
        // write your logic here
    }

    searchByFounder(event: any) {
        // write your logic here
    }
}
