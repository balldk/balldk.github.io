<!-- <div class="logo-container block mx-auto my-0 w-28 h-28 hover:boder-none">
    <div
        class="logo block relative bg-[url('/logo.svg')] bg-center bg-black bg-repeat bg-cover h-full border-solid border-primary border-2"
    ></div>
</div> -->
<div class="logo-container block mx-auto my-0 w-36 h-36 hover:boder-none">
    <div
        class="logo block relative bg-[url('/portrait.png')] bg-center bg-[#d9ffb6] bg-no-repeat bg-contain h-full border-solid border-primary border-2"
    ></div>
</div>

<style lang="scss">
    .logo {
        animation: morph 6s ease-in-out infinite;

        @keyframes morph {
            0% {
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }

            50% {
                border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            }

            100% {
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
        }
    }
</style>
