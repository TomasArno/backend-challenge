import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Advertisement } from "./Advertisement.entity";

enum Sector {
  residential,
  commercial,
  industrial,
  agricultural,
}

@Entity()
class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  area: string;

  @Column()
  ownerName: string;

  @Column({ type: "enum", enum: Sector })
  sector: string;

  @OneToMany(() => Advertisement, (advertisement) => advertisement.property)
  advertisements: Advertisement[];
}

export { Property };
