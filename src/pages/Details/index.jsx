import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, accusamus. Aspernatur sed voluptas distinctio
            officia voluptatum alias blanditiis laudantium optio eum. Libero
            error minus aliquam animi voluptatum debitis dolorum inventore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            ullam! Unde consequuntur officia alias dolorem quo maiores facere,
            libero quia quos saepe at laborum reprehenderit iusto suscipit
            fugiat culpa modi!
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
