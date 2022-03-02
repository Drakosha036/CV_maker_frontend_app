import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {
 
  //partie test pour display popup

  constructor() { }

  ngOnInit(): void {
  }
  //variables contenants de texte de description
  descriptionText = {
    capaciteDAdaptation : "La capacité d'adaptation est une compétence qui va permettre de relever de nouveaux défis rapidement, de résoudre des problèmes et prendre des décisions saines, de s'adapter à de nouveaux projets.",
    gestionDuStress : "Capacité de faire face avec succès à une situation stressante et de se ressaisir et s'adapter en dépit de circonstances défavorables.",
    travailEnEquipe : "Le travail en équipe est une manière de travailler qui repose sur un groupe d'individus œuvrant pour un projet commun.",
    capaciteAFederer : "Donner une « vision » à l'équipe. C'est-à-dire à notamment fédérer l'équipe dans le pourquoi d'un projet. Une personne dotée de cette compétence est généralement un bon communicant.",
    sensDeLaCommunication : "Avoir une bonne communication avec les autres. D'être a l'ecoute et en rapport avec autrui.",
    rigueur : "Dureté, sévérité. Se dit d'une attitude ferme, intransigeante, qui caractérise une personne ne dérogeant pas à des principes ou à des règles strictes.",
    autonomie : "Capacité à entreprendre des actions par soi-même en se donnant ses propres limites et règles de conduite.",
    capaciteDeDecision : "Processus cognitif complexe consistant en un choix d'action parmi plusieurs alternatives. Le choix final résulte de ce processus, et ce choix peut être une opinion ou une action.",
    sensDeLOrganisation : "Capacité à mettre en place des méthodes de travail efficaces et rigoureuses, pour soi ou pour son équipe.",
    forceDeProposition : "Un collaborateur sur qui l'on peut compter. D'un côté, le talent d'être sur tous les fronts avec la même motivation implacable. S'impliquer, anticiper, proposer, et réagir en toutes circonstances.",
    curiosite : "Qualité de quelqu'un qui a le désir de connaître, de savoir : C'est la curiosité qui l'a poussé vers la recherche.",
    perseverance : "Qualité d'une personne qui persévère, qui s'obstine, qui fait preuve d'opiniâtreté, de constance, de ténacité, d'acharnement.",
    priseDeRecul : "Regarder les choses sous un autre angle.",
    reactivite : "Capacité à s'adapter à une situation ou un problème donné.",
    competenceSup1 : "Description de competence supplementaire 1",
    competenceSup2 : "Description de competence supplementaire 2",
  }

  popupFunction1() {
    let popup1 = document.getElementById("myPopup1");
    popup1?.classList.toggle("show");
  }

  popupFunction2() {
    let popup2 = document.getElementById("myPopup2");
    popup2?.classList.toggle("show");
  }

  popupFunction3() {
    let popup3 = document.getElementById("myPopup3");
    popup3?.classList.toggle("show");
  }

  popupFunction4() {
    let popup4 = document.getElementById("myPopup4");
    popup4?.classList.toggle("show");
  }

  popupFunction5() {
    let popup5 = document.getElementById("myPopup5");
    popup5?.classList.toggle("show");
  }

  popupFunction6() {
    let popup6 = document.getElementById("myPopup6");
    popup6?.classList.toggle("show");
  }

  popupFunction7() {
    let popup7 = document.getElementById("myPopup7");
    popup7?.classList.toggle("show");
  }

  popupFunction8() {
    let popup8 = document.getElementById("myPopup8");
    popup8?.classList.toggle("show");
  }

  popupFunction9() {
    let popup9 = document.getElementById("myPopup9");
    popup9?.classList.toggle("show");
  }

  popupFunction10() {
    let popup10 = document.getElementById("myPopup10");
    popup10?.classList.toggle("show");
  }

  popupFunction11() {
    let popup11 = document.getElementById("myPopup11");
    popup11?.classList.toggle("show");
  }

  popupFunction12() {
    let popup12 = document.getElementById("myPopup12");
    popup12?.classList.toggle("show");
  }

  popupFunction13() {
    let popup13 = document.getElementById("myPopup13");
    popup13?.classList.toggle("show");
  }

  popupFunction14() {
    let popup14 = document.getElementById("myPopup14");
    popup14?.classList.toggle("show");
  }

  popupFunction15() {
    let popup15 = document.getElementById("myPopup15");
    popup15?.classList.toggle("show");
  }

  popupFunction16() {
    let popup16 = document.getElementById("myPopup16");
    popup16?.classList.toggle("show");
  }

}
