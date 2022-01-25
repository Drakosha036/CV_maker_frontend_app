import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './home/profile/profile.component';
import { TemplateCvComponent } from './new-cv/template-cv/template-cv.component';
import { GeneralInfoComponent } from './new-cv/general-info/general-info.component';
import { HardSkillsComponent } from './new-cv/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './new-cv/soft-skills/soft-skills.component';
import { ExperienceProComponent } from './new-cv/experience-pro/experience-pro.component';
import { AvailabilityComponent } from './new-cv/availability/availability.component';
import { HardSkillsListComponent } from './admin/hard-skills-list/hard-skills-list.component';
import { SoftSkillsTestComponent } from './admin/soft-skills-test/soft-skills-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TermsOfServiceComponent } from './agreements/terms-of-service/terms-of-service.component';
import { AdaptabilityComponent } from './skill-test/adaptability/adaptability.component';
import { StressManagementComponent } from './skill-test/stress-management/stress-management.component';
import { TeamWorkComponent } from './skill-test/team-work/team-work.component';
import { AbilityToFederateComponent } from './skill-test/ability-to-federate/ability-to-federate.component';
import { CommunicationSkillsComponent } from './skill-test/communication-skills/communication-skills.component';
import { StrictnessComponent } from './skill-test/strictness/strictness.component';
import { AutonomyComponent } from './skill-test/autonomy/autonomy.component';
import { DecisionMakingCapacityComponent } from './skill-test/decision-making-capacity/decision-making-capacity.component';
import { OrganizationSkillsComponent } from './skill-test/organization-skills/organization-skills.component';
import { ProposalStrengthComponent } from './skill-test/proposal-strength/proposal-strength.component';
import { CuriousityComponent } from './skill-test/curiousity/curiousity.component';
import { PerseveranceComponent } from './skill-test/perseverance/perseverance.component';
import { StepBackComponent } from './skill-test/step-back/step-back.component';
import { ReactivityComponent } from './skill-test/reactivity/reactivity.component';
import { ConfirmationToCloseComponent } from './pop-up/confirmation-to-close/confirmation-to-close.component';
import { SaveAndCloseComponent } from './pop-up/save-and-close/save-and-close.component';
import { AddSkillsComponent } from './pop-up/add-skills/add-skills.component';
import { ChangeSkillsComponent } from './pop-up/change-skills/change-skills.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    TemplateCvComponent,
    GeneralInfoComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ExperienceProComponent,
    AvailabilityComponent,
    HardSkillsListComponent,
    SoftSkillsTestComponent,
    PageNotFoundComponent,
    TermsOfServiceComponent,
    AdaptabilityComponent,
    StressManagementComponent,
    TeamWorkComponent,
    AbilityToFederateComponent,
    CommunicationSkillsComponent,
    StrictnessComponent,
    AutonomyComponent,
    DecisionMakingCapacityComponent,
    OrganizationSkillsComponent,
    ProposalStrengthComponent,
    CuriousityComponent,
    PerseveranceComponent,
    StepBackComponent,
    ReactivityComponent,
    ConfirmationToCloseComponent,
    SaveAndCloseComponent,
    AddSkillsComponent,
    ChangeSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
