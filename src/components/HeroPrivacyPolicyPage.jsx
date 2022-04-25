import { React, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

function PrivacyPolicyPage() {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      

      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[100%] relative z-[3]">
        <div className="p-8" >
          <h1>Política Privacidade</h1>
          <p>A sua privacidade é importante para nós.</p>
          <p>
            É política do Radio Tunga Né respeitar a sua privacidade em relação
            a qualquer informação sua que possamos coletar no site Radio Tunga
            Né, e outros sites que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </p>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis ​​para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </p>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </p>
          <p>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade.
          </p>
          <p>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </p>
          <p>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contacto connosco.
          </p>
          <h1>Política de Cookies Radiounga Né</h1> <h2>O que são cookies?</h2>
          <p>
            Como é prática comum em quase todos os sites profissionais, este
            site usa cookies, que são pequenos arquivos baixados no seu
            computador, para melhorar sua experiência. Esta página descreve
            quais informações eles coletam, como as usamos e por que às vezes
            precisamos armazenar esses cookies. Também compartilharemos como
            você pode impedir que esses cookies sejam armazenados, no entanto,
            isso pode fazer o downgrade ou 'quebrar' certos elementos da
            funcionalidade do site.
          </p>
          <h1>Como usamos os cookies?</h1>
          <p>
            Utilizamos cookies por vários motivos, detalhados abaixo.
            Infelizmente, na maioria dos casos, não existem opções padrão do
            setor para desativar os cookies sem desativar completamente a
            funcionalidade e os recursos que eles adicionam a este site. É
            recomendável que você deixe todos os cookies se não tiver certeza se
            precisa ou não deles, caso sejam usados ​​para fornecer um serviço
            que você usa.
          </p>
          <h1>Desativar cookies </h1>
          <p>
            Você pode impedir a configuração de cookies ajustando as
            configurações do seu navegador (consulte a Ajuda do navegador para
            saber como fazer isso). Esteja ciente de que a desativação de
            cookies afetará a funcionalidade deste e de muitos outros sites que
            você visita. A desativação de cookies geralmente resultará na
            desativação de determinadas funcionalidades e recursos deste site.
            Portanto, é recomendável que você não desative os cookies.
          </p>
          <h1>Cookies que definimos</h1>
          <p>
            Cookies relacionados à conta Se você criar uma conta connosco,
            usaremos cookies para o gerenciamento do processo de inscrição e
            administração geral. Esses cookies geralmente serão excluídos quando
            você sair do sistema, porém, em alguns casos, eles poderão
            permanecer posteriormente para lembrar as preferências do seu site
            ao sair.
          </p>
          <p>
            Cookies relacionados ao login Utilizamos cookies quando você está
            logado, para que possamos lembrar dessa ação. Isso evita que você
            precise fazer login sempre que visitar uma nova página. Esses
            cookies são normalmente removidos ou limpos quando você efetua
            logout para garantir que você possa acessar apenas a recursos e
            áreas restritas ao efetuar login.
          </p>
          <p>
            Cookies relacionados a boletins por e-mail Este site oferece
            serviços de assinatura de boletim informativo ou e-mail e os cookies
            podem ser usados ​​para lembrar se você já está registrado e se deve
            mostrar determinadas notificações válidas apenas para usuários
            inscritos / não inscritos.
          </p>
          <p>
            Pedidos processando cookies relacionados Este site oferece
            facilidades de comércio eletrônico ou pagamento e alguns cookies são
            essenciais para garantir que seu pedido seja lembrado entre as
            páginas, para que possamos processá-lo adequadamente.
          </p>
          <p>
            Cookies relacionados a pesquisas Periodicamente, oferecemos
            pesquisas e questionários para fornecer informações interessantes,
            ferramentas úteis ou para entender nossa base de usuários com mais
            precisão. Essas pesquisas podem usar cookies para lembrar quem já
            participou numa pesquisa ou para fornecer resultados precisos após a
            alteração das páginas.
          </p>
          <p>
            Cookies relacionados a formulários Quando você envia dados por meio
            de um formulário como os encontrados nas páginas de contacto ou nos
            formulários de comentários, os cookies podem ser configurados para
            lembrar os detalhes do usuário para correspondência futura.
          </p>
          <p>
            Cookies de preferências do site Para proporcionar uma ótima
            experiência neste site, fornecemos a funcionalidade para definir
            suas preferências de como esse site é executado quando você o usa.
            Para lembrar suas preferências, precisamos definir cookies para que
            essas informações possam ser chamadas sempre que você interagir com
            uma página for afetada por suas preferências.
          </p>
          <h1>Cookies de Terceiros</h1>
          <p>
            Em alguns casos especiais, também usamos cookies fornecidos por
            terceiros confiáveis. A seção a seguir detalha quais cookies de
            terceiros você pode encontrar através deste site.
          </p>
          <p>
            Este site usa o Google Analytics, que é uma das soluções de análise
            mais difundidas e confiáveis ​​da Web, para nos ajudar a entender
            como você usa o site e como podemos melhorar sua experiência. Esses
            cookies podem rastrear itens como quanto tempo você gasta no site e
            as páginas visitadas, para que possamos continuar produzindo
            conteúdo atraente.
          </p>
          <p>
            Para mais informações sobre cookies do Google Analytics, consulte a
            página oficial do Google Analytics.
          </p>
          <p>
            As análises de terceiros são usadas para rastrear e medir o uso
            deste site, para que possamos continuar produzindo conteúdo
            atrativo. Esses cookies podem rastrear itens como o tempo que você
            passa no site ou as páginas visitadas, o que nos ajuda a entender
            como podemos melhorar o site para você.
          </p>
          <p>
            Periodicamente, testamos novos recursos e fazemos alterações subtis
            na maneira como o site se apresenta. Quando ainda estamos testando
            novos recursos, esses cookies podem ser usados ​​para garantir que
            você receba uma experiência consistente enquanto estiver no site,
            enquanto entendemos quais otimizações os nossos usuários mais
            apreciam.
          </p>
          <p>
            À medida que vendemos produtos, é importante entendermos as
            estatísticas sobre quantos visitantes de nosso site realmente
            compram e, portanto, esse é o tipo de dados que esses cookies
            rastrearão. Isso é importante para você, pois significa que podemos
            fazer previsões de negócios com precisão que nos permitem analizar
            nossos custos de publicidade e produtos para garantir o melhor preço
            possível.
          </p>
          <h1>Compromisso do Usuário </h1>
          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o Radio Tunga Né oferece no site e com caráter
            enunciativo, mas não limitativo:
          </p>
          <p>
            A) Não se envolver em atividades que sejam ilegais ou contrárias à
            boa fé a à ordem pública;
          </p>
          <p>
            B) Não difundir propaganda ou conteúdo de natureza racista,
            xenofóbica, Onde Bola ou azar, qualquer tipo de pornografia ilegal,
            de apologia ao terrorismo ou contra os direitos humanos;
          </p>
          <p>
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos
            (softwares) do Radio Tunga Né, de seus fornecedores ou terceiros,
            para introduzir ou disseminar vírus informáticos ou quaisquer outros
            sistemas de hardware ou software que sejam capazes de causar danos
            anteriormente mencionados.
          </p>
          <h1> Mais informações</h1>
          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </p>
          <p> Esta política é efetiva a partir de April/2022.</p>
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default PrivacyPolicyPage;
