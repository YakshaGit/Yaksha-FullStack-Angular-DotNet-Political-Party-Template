import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoliticalParty } from '../model/political-party.model';

@Injectable({
    providedIn: 'root'
})
export class PoliticalPartyService {
    private apiUrl = 'http://localhost:5000/parties';

    constructor(private http: HttpClient) { }

    getAllPoliticalParties(): any {
        // write your logic here
        return null;
    }

    createPoliticalParty(party: PoliticalParty): any {
        // write your logic here
        return null;
    }

    getPoliticalPartyById(id: number): any {
        // write your logic here
        return null;
    }

    updatePoliticalParty(party: PoliticalParty): any {
        // write your logic here
        return null;
    }

    deletePoliticalParty(id: number): any {
        // write your logic here
        return null;
    }

    searchPoliticalPartyByName(name: string): any {
        // write your logic here
        return null;
    }

    searchPoliticalPartyByFounder(founder: string): any {
        // write your logic here
        return null;
    }
}
