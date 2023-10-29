const home = () => {
  return `
  <section
  class="w-screen h-full grid place-items-center overflow-x-hidden duration-300 mt-20"
>
  <div
    class="h-full flex flex-col items-center w-screen sm:w-8/12 lg:w-screen max-w-[1500px]"
  >
    <!-- section 1 -->
    <section
      class="p-8 w-full section-1 flex flex-col items-center lg:w-7/12"
    >
      <h2
        class="font-poppin font-bold text-center text-2xl sm:text-4xl lg:text-6xl"
      >
        The Most
        <span class="text-purple-500 font-pixely sm:text-5xl lg:text-7xl"
          >INTELLIGENT
        </span>
        Web Applications
      </h2>

      <a
        href="https://my-portfolio-rho-jet.vercel.app/"
        class="font-poppin font-normal text-center text-xs bg-purple-500 cursor-pointer mt-5 rounded-full p-3 text-white w-40 lg:mt-12 lg:w-60 lg:h-14 grid place-items-center lg:text-lg"
      >
        My Portfolio App
      </a>

      <p
        class="text-center text-gray-500 mt-8 text-xs font-poppin font-normal sm:text-base lg:text-lg"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        in necessitatibus odio vero aut delectus, eveniet temporibus eos
        accusamus eum provident, tempore, nisi nemo saepe animi amet! At
        labore non blanditiis mollitia possimus culpa ex, unde sunt, ipsa
        facilis enim?
      </p>

      <svg
        width="34"
        height="34"
        class="mt-8 lg:mt-14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21.25C11.81 21.25 11.62 21.18 11.47 21.03L5.4 14.96C5.11 14.67 5.11 14.19 5.4 13.9C5.69 13.61 6.17 13.61 6.46 13.9L12 19.44L17.54 13.9C17.83 13.61 18.31 13.61 18.6 13.9C18.89 14.19 18.89 14.67 18.6 14.96L12.53 21.03C12.38 21.18 12.19 21.25 12 21.25Z"
          fill="#74787C"
        />
        <path
          d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z"
          fill="#74787C"
        />
      </svg>
    </section>

    <!-- section 2 -->
    <section
      class="p-8 w-full section-1 flex flex-col items-center lg:flex-row lg:w-11/12 lg:justify-between lg:mt-7"
    >
      <div class="text-center relative lg:px-5 lg:w-6/12">
        <h4
          class="font-poppin font-bold text-center text-2xl sm:text-4xl lg:text-6xl lg:text-left"
        >
          Fully on
          <span
            class="text-purple-500 font-pixely text-2xl sm:text-5xl lg:text-7xl"
            >WEB</span
          >
          And Useable On any Devices
        </h4>

        <p
          class="text-center text-gray-500 mt-4 text-xs font-poppin font-normal sm:text-base lg:mt-10 lg:text-lg lg:text-left"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus recusandae natus voluptatum magnam? Quidem
          voluptate cum aperiam facere magni, voluptatibus dignissimos,
          magnam labore officia asperiores ipsa molestias exercitationem.
          Corrupti, voluptatum!
        </p>
      </div>
      <div
        class="ml-3 lg:max-w-[450px] backdrop:grid place-items-center lg:-mt-4 w-8/12"
      >
        <img src="./postcss/public/build/assets/hero.png" alt="" class="w-full" />
      </div>
    </section>

    <!-- section 2.5 -->

    <section
      class="w-screen grid place-items-center shadow-inner lg:mt-10 bg-primary  shadow-gray-700"
    >
      <div
        class="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:flex px-1 w-screen lg:px-12 max-w-[1440px] py-6 pb-12"
      >
        <img
        src="./postcss/public/build/assets/feature-1.png" 
          alt=""
          class="lg:max-w-[45%] justify-self-start lg:justify-self-center w-10/12 mt-5"
        />

        <div
          class="text-center relative lg:px-5 lg:w-6/12 lg:self-start lg:mt-10 w-11/12 md:w-8/12"
        >
          <h4
            class="font-poppin font-bold text-center text-xl sm:text-4xl lg:text-4xl lg:text-right"
          >
            Fully on
            <span
              class="text-purple-500 font-pixely text-2xl sm:text-5xl lg:text-5xl"
              >WEB</span
            >
            And Useable On any Devices
          </h4>

          <p
            class="text-center text-gray-500 mt-4 text-xs font-poppin font-normal sm:text-base lg:mt-10 lg:text-base lg:text-right"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus recusandae natus voluptatum magnam? Quidem
            voluptate cum aperiam facere magni, voluptatibus dignissimos,
            magnam labore officia asperiores ipsa molestias exercitationem.
            Corrupti, voluptatum!
          </p>

          <hr class="lg:border-t-[3px] mt-5 mx-auto my-auto" />

          <div class="place-items-center w-full hidden md:grid">
            <ul
              class="list-none w-full flex flex-col items-center gap-y-2 mt-4"
            >
              <li
                class="flex flex-row justify-start items-center gap-x-2 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="min-w-[17px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z"
                    fill="#7E3AF2"
                  />
                </svg>
                <h6
                  class="text-left font-poppin font-medium text-sm flex-nowrap min-w-full"
                >
                  Lorem ipsum dolor sit, amet consectetur.
                </h6>
              </li>

              <li
                class="flex flex-row justify-start items-center gap-x-2 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="min-w-[17px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z"
                    fill="#7E3AF2"
                  />
                </svg>
                <h6
                  class="text-left font-poppin font-medium text-sm min-w-full"
                >
                  Lorem ipsum dolor sit, amet consectetur.
                </h6>
              </li>

              <li
                class="flex flex-row justify-start items-center gap-x-2 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="min-w-[17px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z"
                    fill="#7E3AF2"
                  />
                </svg>
                <h6
                  class="text-left font-poppin font-medium text-sm min-w-full"
                >
                  Lorem ipsum dolor sit, amet consectetur.
                </h6>
              </li>

              <li
                class="flex flex-row justify-start items-center gap-x-2 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="min-w-[17px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z"
                    fill="#7E3AF2"
                  />
                </svg>
                <h6
                  class="text-left font-poppin font-medium text-sm min-w-full"
                >
                  Lorem ipsum dolor sit, amet consectetur.
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-------------------- CARDS ----------------------->
    <!-- section 3 -->
    <section
      class="p-5 w-10/12 section-1 flex flex-col items-center mt-8 relative top-1 lg:w-4/12 lg:self-start lg:text-left lg:items-start lg:ml-20 lg:animate-fade-right lg:px-12"
    >
      <div class="text-center lg:text-left">
        <h4
          class="font-poppin font-bold text-center text-2xl sm:text-4xl lg:text-left lg:text-5xl"
        >
          Best Web Applications With Best
          <span
            class="text-purple-500 font-pixely text-2xl sm:text-5xl lg:text-6xl"
            >PRICES</span
          >
        </h4>

        <p
          class="text-center text-gray-500 mt-4 text-xs font-poppin font-normal sm:text-base lg:text-left"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis quidem aut animi quos deleniti eum aliquam quisquam in
          rem quam!
        </p>
      </div>

      <div
        class="ml-3 lg:max-w-[450px] backdrop:grid place-items-center w-8/12 mt-10"
      >
        <img src="./postcss/public/build/assets/card.png" alt="" class="w-full" />
      </div>

      <p
        class="text-center text-gray-500 mt-4 text-xs font-poppin font-normal sm:text-base w-4/6 lg:text-left lg:hidden"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        quasi.
      </p>
    </section>

    <!-- section 4 -->
    <section
      class="p-8 w-10/12 section-1 flex flex-col items-center mt-8 relative top-1 lg:w-4/12 lg:text-left lg:items-center lg:-mt-[21rem] lg:animate-jump-in lg:px-12 lg:ml-10"
    >
      <div class="text-center">
        <h4
          class="font-poppin font-bold text-center text-2xl sm:text-4xl lg:text-5xl"
        >
          Even
          <span class="text-purple-500 font-pixely text-2xl sm:text-5xl"
            >DAPPS</span
          >
          and
          <span class="text-purple-500 font-pixely text-2xl sm:text-5xl"
            >WEB3</span
          >
          Related Apps
          <span class="text-purple-500 font-pixely text-2xl sm:text-5xl"
            >!!</span
          >
        </h4>

        <p
          class="text-center text-gray-500 mt-4 text-xs font-poppin font-normal sm:text-base"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis quidem aut animi quos deleniti eum aliquam quisquam in
          rem quam!
        </p>
      </div>

      <div
        class="p-8 w-full section-1 flex flex-col items-center -mt-8 max-w-[450px]"
      >
        <img src="./postcss/public/build/assets/world.png" alt="" class="w-full" />
      </div>

      <p
        class="text-center text-gray-500 mt-4 text-xs font-poppin font-normal sm:text-base lg:hidden"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        quasi.
      </p>
    </section>

    <!-- section 5 -->
    <section
      class="p-8 w-10/12 section-1 flex flex-col items-center relative top-1 lg:w-4/12 lg:self-end lg:text-left lg:items-end lg:ml-32 lg:animate-fade-left lg:-mt-[31rem] lg:px-12"
    >
      <div class="text-center">
        <h4
          class="font-poppin font-bold text-center text-2xl sm:text-4xl lg:text-right lg:text-5xl"
        >
          Most Safe
          <span class="text-purple-500 font-pixely text-2xl sm:text-5xl"
            >SMART CONTRACTS</span
          >
          for your projects
        </h4>

        <p
          class="text-center text-gray-500 mt-4 text-xs font-poppin font-normal sm:text-base lg:text-right"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis quidem aut animi quos deleniti eum aliquam quisquam in
          rem quam!
        </p>
      </div>

      <div
        class="p-8 w-full max-w-[450px] section-1 flex flex-col items-center -mt-8"
      >
        <img src="./postcss/public/build/assets/safe.png" alt="" class="w-full" />
      </div>

      <p
        class="text-center text-gray-500 mt-4 text-xs font-poppin font-norma sm:text-base lg:hidden"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        quasi.
      </p>
    </section>

    <!-- section 6 -->
    <section
      class="w-screen grid place-items-center shadow-inner lg:mt-10 bg-primary shadow-gray-700 "
    >
      <div
        class="flex flex-col-reverse items-center lg:flex-row-reverse lg:justify-between lg:flex px-1 w-screen lg:px-12 max-w-[1440px] py-6 pb-12"
      >
        <img
          src="./postcss/public/build/assets/feature-2.png"
          alt=""
          class="lg:max-w-[45%] justify-self-start lg:justify-self-center w-10/12 mt-5"
        />

        <div
          class="text-center relative lg:px-5 lg:w-6/12 lg:self-start lg:mt-10 w-11/12 md:w-8/12"
        >
          <h4
            class="font-poppin font-bold text-center text-xl sm:text-4xl lg:text-4xl lg:text-left"
          >
            Fully on
            <span
              class="text-purple-500 font-pixely text-2xl sm:text-5xl lg:text-5xl"
              >WEB</span
            >
            And Useable On any Devices
          </h4>

          <p
            class="text-center text-gray-500 mt-4 text-xs font-poppin font-normal sm:text-base lg:mt-10 lg:text-base lg:text-left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus recusandae natus voluptatum magnam? Quidem
            voluptate cum aperiam facere magni, voluptatibus dignissimos,
            magnam labore officia asperiores ipsa molestias exercitationem.
            Corrupti, voluptatum!
          </p>

          <hr class="lg:border-t-[3px] mt-5 mx-auto my-auto" />

          <div class="place-items-center w-full hidden md:grid">
            <ul
              class="list-none w-full flex flex-col items-center gap-y-2 mt-4"
            >
              <li
                class="flex flex-row justify-start items-center gap-x-2 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="min-w-[17px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z"
                    fill="#7E3AF2"
                  />
                </svg>
                <h6
                  class="text-left font-poppin font-medium text-sm flex-nowrap min-w-full"
                >
                  Lorem ipsum dolor sit, amet consectetur.
                </h6>
              </li>

              <li
                class="flex flex-row justify-start items-center gap-x-2 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="min-w-[17px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z"
                    fill="#7E3AF2"
                  />
                </svg>
                <h6
                  class="text-left font-poppin font-medium text-sm min-w-full"
                >
                  Lorem ipsum dolor sit, amet consectetur.
                </h6>
              </li>

              <li
                class="flex flex-row justify-start items-center gap-x-2 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="min-w-[17px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z"
                    fill="#7E3AF2"
                  />
                </svg>
                <h6
                  class="text-left font-poppin font-medium text-sm min-w-full"
                >
                  Lorem ipsum dolor sit, amet consectetur.
                </h6>
              </li>

              <li
                class="flex flex-row justify-start items-center gap-x-2 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="min-w-[17px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z"
                    fill="#7E3AF2"
                  />
                </svg>
                <h6
                  class="text-left font-poppin font-medium text-sm min-w-full"
                >
                  Lorem ipsum dolor sit, amet consectetur.
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- section 7-->
    <section
      class="p-8 w-screen section-1 flex flex-col items-center relative top-1 bg-purple-500 sm:px-28 lg:px-80"
    >
      <div class="text-center max-w-[700px] pb-6">
        <div
          class="w-full flex flex-col items-center text-center max-w-[700px]"
        >
          <h4
            class="font-poppin font-bold text-center text-x text-white sm:text-4xl"
          >
            Book Your Consultation session Now !
          </h4>

          <p
            class="text-gray-200 mt-4 text-xs font-poppin font-normal sm:text-base lg:text-lg lg:text-center lg:self-center max-w-[40rem] text-center my-auto mx-auto"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis quidem aut animi quos deleniti eum aliquam quisquam
            in rem quam!
          </p>

          <a
            href="https://my-portfolio-rho-jet.vercel.app/"
            class="font-poppin font-normal text-center text-xs bg-white cursor-pointer mt-8 rounded-full p-3 text-black block w-full"
          >
            Contact Me !</a
          >
        </div>
      </div>
    </section>
  </div>

  <!-- section 8  -->

  <section class="flex flex-col items-center text-center py-20 w-screen">
    <svg
      width="48"
      height="36"
      viewBox="0 0 48 36"
      fill="none"
      class="my-3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.034 36L28.034 21.218C28.034 9.81 35.496 2.078 46 0L47.99 4.302C43.126 6.136 40 11.578 40 16H48V36H28.034ZM0 36V21.218C0 9.81 7.496 2.076 18 0L19.992 4.302C15.126 6.136 12 11.578 12 16H19.966L19.966 36L0 36Z"
        fill="#9CA3AF"
      />
    </svg>

    <h6
      class="drop-shadow-2xl md:text-3xl text-xl font-bold font-poppin px-3"
    >
      "Danial is the best Programming Talent ,<br />
      I have ever seen in my life."
    </h6>
    <p class="mt-5 text-xsfont-poppin">
      <span class="font-semibold "> My MAMA / </span> Co-founder
      of me
    </p>
  </section>
  <!-- Footer -->
  <footer class="w-screen p-20 grid place-items-center md:p-16">
    <div
      class="flex flex-col gap-y-8 w-full items-center md:flex-row md:gap-x-4 md:justify-between max-w-[900px]"
    >
      <ul
        class="flex flex-col items-center text-center gap-y-2 mb-4 font-poppin font-light text-sm text-slate-600 md:w-3/12 md:text-left w-full"
      >
        <li
          class="font-normal border-b-2 border-slate-600 border-solid text-base w-full text-left md:pb-3"
        >
          Contact me <span class="text-[0.5rem]">(Links work)</span>
        </li>
        <li class="w-full hover:underline">
          <a href="https://github.com/danialeyz">LinkedIn</a>
        </li>
        <li class="w-full hover:underline">
          <a href="https://my-portfolio-rho-jet.vercel.app/">PORTFOLIO</a>
        </li>
        <li class="w-full hover:underline">
          <a href="https://github.com/danialeyz">GITHUB</a>
        </li>
      </ul>

      <ul
        class="flex flex-col items-center text-center gap-y-2 mb-4 font-poppin font-light text-sm text-slate-600 md:w-3/12 md:text-left w-full"
      >
        <li
          class="font-normal border-b-2 border-slate-600 border-solid text-base w-full text-left md:pb-3"
        >
          Company
        </li>
        <li class="w-full hover:underline">About</li>
        <li class="w-full hover:underline">Premium</li>
        <li class="w-full hover:underline">Blog</li>
      </ul>
      <ul
        class="flex flex-col items-center text-center gap-y-2 mb-4 font-poppin font-light text-sm text-slate-600 md:w-3/12 md:text-left w-full"
      >
        <li
          class="font-normal border-b-2 border-slate-600 border-solid text-base w-full text-left md:pb-3"
        >
          Leraning
        </li>
        <li class="w-full hover:underline">Manuals</li>
        <li class="w-full hover:underline">Tutorials</li>
        <li class="w-full hover:underline">Cummiunities</li>
      </ul>
    </div>
  </footer>
  <!-- copyright -->
  <div
    class="font-poppin font-semibold text-[0.4rem] w-screen mx-auto flex flex-row justify-center items-center -mt-16 md:text-sm"
  >
    <span class="text-sm md:text-lg">©</span> Fully coded by
    <span class="font-pixely text-purple-500 text-[0.5rem] md:text-lg">
      Danial Eyvazi</span
    >
    2023 | Design inspired by Landwind
  </div>
</section>`;
};

export default home;
