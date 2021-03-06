function SoundManager(){
	this.sounds = {};
	this.soundsIndex = {};
}

SoundManager.prototype.registerSound = function(sound, vol, duplicate) {
	let v = vol == undefined? 1: vol;
	let d = duplicate == undefined? 10:duplicate;
	if (this.sounds[sound.name] == undefined) {
		this.sounds[sound.name] = [];
		for (var i = 0; i < 10; ++i) {
			let audio = new Audio(sound.src);
			audio.volume = v;
			this.sounds[sound.name].push(audio);
		}
	}
	this.soundsIndex[sound.name] = 0;
}

SoundManager.prototype.play = function(sound) {
	var index = this.soundsIndex[sound];
	this.soundsIndex[sound]++;
	if (this.soundsIndex[sound] == 10) this.soundsIndex[sound] = 0;
	this.sounds[sound][index].play();
	return this.sounds[sound][index];
}