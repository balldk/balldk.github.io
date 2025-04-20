let clickSound: HTMLAudioElement | null = $state(null)

export const clickSoundStore = {
    init() {
        clickSound = new Audio('/sounds/click.mp3')
        clickSound.volume = 0.5
    },
    play() {
        if (clickSound == null) return
        clickSound.currentTime = 0
        clickSound.play()
    },
}
