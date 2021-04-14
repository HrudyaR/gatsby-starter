import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import FancyParagraph from "../components/fancy-paragraph"

const demo=()=>(
  <Layout>
    <SEO title="Sweet Gatsby" />
    <div className="text-center">
      <h1 className="text-primary">Sweet Gatsby!</h1>

      <FancyParagraph paragraphText="Candy apple pie jelly beans ice cream candy. Apple pie fruitcake cotton candy I love. Jelly jelly beans chocolate cupcake wafer pudding. Pastry sweet roll powder dragée." />
    </div>

    <div class="row">
      <StaticImage
        class="col-6 "
        src="../images/sweet.png"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Sweet 1"
        style={{ marginBottom: `1.45rem` }}
      />

      <StaticImage
        class="col-6 "
        src="../images/sweet2.png"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Sweet 2"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>


    <p>Icing caramels biscuit I love jelly beans toffee chocolate bar ice cream. Cheesecake cheesecake dragée fruitcake
      I love tiramisu tiramisu. Gingerbread candy canes cake oat cake sesame snaps.
    </p>

    <p>Soufflé I love cake dessert apple pie chocolate cake gummies sugar plum. Topping sweet roll powder I love. Chocolate cake candy canes bonbon
      macaroon bear claw marzipan muffin jelly-o caramels. Tootsie roll I love halvah sugar plum I love I love. Carrot cake I love liquorice bear
      claw cotton candy. Candy carrot cake gummies danish wafer danish cake pie.
    </p>

    <div class="row">

      <StaticImage
        class="col-6 float-md-end "
        src="../images/demo-image.jpg"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Pastry"
        style={{ marginBottom: `1.45rem` }}
      />

      <p class="col-6">Pastry dessert tiramisu pastry. Bear claw I love cake tootsie roll cookie sugar plum apple pie gummies tootsie roll. Cake carrot cake cake marzipan chocolate cake donut. Cake jelly-o candy brownie marzipan muffin. Macaroon ice cream tootsie roll dragée bear claw jelly marshmallow dragée. Sweet cookie bear claw I love macaroon marzipan chocolate bar I love tootsie roll. Gummi bears tootsie roll ice cream danish donut fruitcake topping topping biscuit. Gingerbread jujubes carrot cake marshmallow bear claw topping candy. Wafer jujubes cotton candy soufflé sweet roll I love I love topping candy. Gingerbread jelly brownie liquorice cookie cupcake caramels. Chocolate bar jelly beans I love bear claw biscuit. Sweet I love pie chocolate cake caramels lollipop danish carrot cake powder. Marshmallow sweet I love I love. Chocolate bar sesame snaps marzipan candy marshmallow I love sweet.

      </p>
    </div>
    <Link to="/">Return to Gatsby Home </Link>



  </Layout>
)


export default demo;
