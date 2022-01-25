import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsOfServiceComponent } from './agreements/terms-of-service/terms-of-service.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AvailabilityComponent } from './new-cv/availability/availability.component';
import { ExperienceProComponent } from './new-cv/experience-pro/experience-pro.component';
import { GeneralInfoComponent } from './new-cv/general-info/general-info.component';
import { HardSkillsComponent } from './new-cv/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './new-cv/soft-skills/soft-skills.component';
import { TemplateCvComponent } from './new-cv/template-cv/template-cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddSkillsComponent } from './pop-up/add-skills/add-skills.component';
import { ChangeSkillsComponent } from './pop-up/change-skills/change-skills.component';
import { ConfirmationToCloseComponent } from './pop-up/confirmation-to-close/confirmation-to-close.component';
import { SaveAndCloseComponent } from './pop-up/save-and-close/save-and-close.component';
import { AbilityToFederateComponent } from './skill-test/ability-to-federate/ability-to-federate.component';
import { AdaptabilityComponent } from './skill-test/adaptability/adaptability.component';
import { AutonomyComponent } from './skill-test/autonomy/autonomy.component';
import { CommunicationSkillsComponent } from './skill-test/communication-skills/communication-skills.component';
import { CuriousityComponent } from './skill-test/curiousity/curiousity.component';
import { DecisionMakingCapacityComponent } from './skill-test/decision-making-capacity/decision-making-capacity.component';
import { OrganizationSkillsComponent } from './skill-test/organization-skills/organization-skills.component';
import { PerseveranceComponent } from './skill-test/perseverance/perseverance.component';
import { ProposalStrengthComponent } from './skill-test/proposal-strength/proposal-strength.component';
import { ReactivityComponent } from './skill-test/reactivity/reactivity.component';
import { StepBackComponent } from './skill-test/step-back/step-back.component';
import { StressManagementComponent } from './skill-test/stress-management/stress-management.component';
import { StrictnessComponent } from './skill-test/strictness/strictness.component';
import { TeamWorkComponent } from './skill-test/team-work/team-work.component';

const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'terms-of-service', component: TermsOfServiceComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'hard-skills-list', component: HardSkillsComponent},
  {path: 'soft-skills-test', component: SoftSkillsComponent},
  {path: 'terms-of-service', component: TermsOfServiceComponent},
  {path: 'availability', component: AvailabilityComponent},
  {path: 'experience-pro', component: ExperienceProComponent},
  {path: 'general-info', component: GeneralInfoComponent},
  {path: 'hard-skills', component: HardSkillsComponent},
  {path: 'soft-skills', component: SoftSkillsComponent},
  {path: 'template-cv', component: TemplateCvComponent},
  {path: 'add-skills', component: AddSkillsComponent},
  {path: 'change-skills', component: ChangeSkillsComponent},
  {path: 'confirmation-to-close', component: ConfirmationToCloseComponent},
  {path: 'save-and-close', component: SaveAndCloseComponent},
  {path: 'ability-to-federate', component: AbilityToFederateComponent},
  {path: 'adaptability', component: AdaptabilityComponent},
  {path: 'autonomy', component: AutonomyComponent},
  {path: 'communication-skills', component: CommunicationSkillsComponent},
  {path: 'curiousity', component: CuriousityComponent},
  {path: 'decision-making-capacity', component: DecisionMakingCapacityComponent},
  {path: 'organization-skills', component: OrganizationSkillsComponent},
  {path: 'perseverance', component: PerseveranceComponent},
  {path: 'proposal-strength', component: ProposalStrengthComponent},
  {path: 'reactivity', component: ReactivityComponent},
  {path: 'step-back', component: StepBackComponent},
  {path: 'stress-management', component: StressManagementComponent},
  {path: 'strictness', component: StrictnessComponent},
  {path: 'team-work', component: TeamWorkComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
