export interface PokeMove {
    accuracy:             number;
    contest_combos:       null;
    contest_effect:       null;
    contest_type:         null;
    damage_class:         DamageClass;
    effect_chance:        null;
    effect_changes:       any[];
    effect_entries:       any[];
    flavor_text_entries:  any[];
    generation:           DamageClass;
    id:                   number;
    learned_by_pokemon:   DamageClass[];
    machines:             MachineElement[];
    meta:                 null;
    name:                 string;
    names:                Name[];
    past_values:          any[];
    power:                number;
    pp:                   number;
    priority:             number;
    stat_changes:         any[];
    super_contest_effect: null;
    target:               DamageClass;
    type:                 DamageClass;
}

export interface DamageClass {
    name: string;
    url:  string;
}

export interface MachineElement {
    machine:       MachineMachine;
    version_group: DamageClass;
}

export interface MachineMachine {
    url: string;
}

export interface Name {
    language: DamageClass;
    name:     string;
}
