import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from "@angular/router";
import { Agent } from '../../models/agent.model'
import { AgentService } from '../../services/agent.service';

import { Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-agent-page',
    templateUrl: './agent-page.component.html',
    styleUrls: ['./agent-page.component.css']
})
export class AgentPageComponent implements OnInit {
    agents: Agent[] = [];
    private agentSub: Subscription;
    
    buttonAgent;
    showDetails = false;

    constructor(private agentService: AgentService){}

    ngOnInit() {
        this.agentService.getAgents();
        this.agentSub = this.agentService.getAgentUpdateListener().subscribe((agents: Agent[]) => {
            this.agents = agents;
        });
    }

    selectAgent(agentName){
        for (let i = 0; i < this.agents.length; ++i){
            if (this.agents[i].agentName === agentName){
                this.buttonAgent = this.agents[i];
                this.showDetails = true;
                break;
            }
        }
        console.log(this.buttonAgent.imageUrl);
    }

    ngOnDestroy() {
        this.agentSub.unsubscribe();
    }
}