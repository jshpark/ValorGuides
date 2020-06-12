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
    showAbilityDescription = false;

    ability = { description: String, cost: String, use: String, video: String};


    constructor(private agentService: AgentService){}

    ngOnInit() {
        this.agentService.getAgents();
        this.agentSub = this.agentService.getAgentUpdateListener().subscribe((agents: Agent[]) => {
            this.agents = agents;
        });
    }

    selectAgent(agentName){
        this.showAbilityDescription = false;
        for (let i = 0; i < this.agents.length; ++i){
            if (this.agents[i].agentName === agentName){
                this.buttonAgent = this.agents[i];
                this.showDetails = true;
                break;
            }
        }
    }

    selectAbility(agentSkill) {
        this.showAbilityDescription = true;
        switch (agentSkill){
            case '1':
                this.ability.video = this.buttonAgent.cVideo;
                this.ability.description = this.buttonAgent.cDescription;
                this.ability.cost = this.buttonAgent.cCost;
                this.ability.use = this.buttonAgent.cUse;
                break;
            case '2':
                this.ability.video = this.buttonAgent.qVideo;
                this.ability.description = this.buttonAgent.qDescription;
                this.ability.cost = this.buttonAgent.qCost;
                this.ability.use = this.buttonAgent.qUse;
                break;
            case '3':
                this.ability.video = this.buttonAgent.eVideo;
                this.ability.description = this.buttonAgent.eDescription;
                this.ability.cost = this.buttonAgent.eCost;
                this.ability.use = this.buttonAgent.eUse;
                break;
            case '4':
                this.ability.video = this.buttonAgent.xVideo;
                this.ability.description = this.buttonAgent.xDescription;
                this.ability.cost = this.buttonAgent.xCost;
                this.ability.use = this.buttonAgent.xUse;
                break;
        }
    }

    ngOnDestroy() {
        this.agentSub.unsubscribe();
    }
}