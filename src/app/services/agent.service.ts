import { Agent } from '../models/agent.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AgentService {
    private agents: Agent[] = [];
    private agentsUpdated = new Subject<Agent[]>();

    constructor(private http: HttpClient){}

    getAgentUpdateListener() {
        return this.agentsUpdated.asObservable();
    }

    getAgents(){
        this.http.get<{message: string, agents: Agent[]}>('http://localhost:3000/agents/getAgents').subscribe((agentList) => {
            this.agents = agentList.agents;
            this.agentsUpdated.next([...this.agents]);
        })
    }
}