
ViewController = require 'ViewController'
Views = new ViewController
	initialView: home
	
Signup_Button.onTap (event, layer) ->
	haven_logo.animate "a",
		time: 0.40
		curve: Spring(damping: 1)
	haven_title.animate
		opacity: 0
		options:
			time: 0.01
			curve: Bezier.ease
	LogIn_Button.animate
		opacity: 0
		options:
			time: 0.01
			curve: Bezier.ease
	or_1.animate
		opacity: 0
		options:
			time: 0.01
			curve: Bezier.ease
		#flow.showNext(screen2)
	Signup_Button.animate
		opacity: 0
		backgroundColor: "#ffffff"
		y: 194
		x: 31
		options: 
			time: 0.5
		signup_text.animate
			color: "#000000"
			y: 213
			x: 145
			options: 
				time: 0.5
			
			
			
	Signup_Button.onAnimationEnd ->
		Views.fadeIn(screen2)

redPass.visible = false
yelloPass.visible = false
greenPass.visible = false
weak.visible = false
haven_logo_1.clip = true

haven_logo.states.a =
	width: 100
	height: 100
	y: 92
	x: 138
	

blinker.animate
	properties:
		opacity: 0
	time: 0.5
	delay: 0.25
	repeat: 100
	
keyboard.onTap ->

	name_placeholder.animate
		opacity: 0.00
		options:
			time: 0.1
			curve: Bezier.linear
			
	Claudia_Jones.animate
		opacity: 1
		color: "#000"
		options:
			time:0.1
			curve: Bezier.linear
	
	blinker.y = 2000

	circle_arrow_right.animate
		backgroundColor: "#1199EE"
		options:
			time: 0.01
			curve: Bezier.linear

	circle_arrow_right.onTap (event, layer) ->
		circle_arrow_right.x = -1000
		circle_arrow_right2.opacity = 1
		circle_arrow_right2.backgroundColor = "#bdbdbd"
		arrow_back.color = "#bdbdbd"
		whatsYourEmail.animate
			x: 64
			color: "#000000"
			options:
				time: 0.3
				curve: Bezier.ease
	
		whatsYourName.animate
			x: 0
			opacity: 0
			options:
				time: 0.30
				curve: Bezier.ease
		blinker.y=13
		Claudia_Jones.text = "Your Email Address"
		Claudia_Jones.color = "#787878"

		keyboard2.animate
			x: 0
			opacity: 1
			options:
				time: 0.01
				curve: Bezier.linear
		
		keyboard.x = -375
		
keyboard2.onTap ->
	Claudia_Jones.text = "claudiajones@gmail.com"
	Claudia_Jones.color = "#000"
	blinker.y=2000
	
	circle_arrow_right.animate
		backgroundColor:  "#1199EE"
		options:
			time: 0.01
			curve: Bezier.linear
	
	circle_arrow_right2.animate
		backgroundColor:  "#1199EE"
		options:
			time: 0.01
			curve: Bezier.linear
	
	circle_arrow_right2.onTap ->
		circle_arrow_right2.x = -1500
		
		whatsPassword.animate
			x: 64
			color: "#000000"
			options:
				time: 0.3
				curve: Bezier.ease
				
		whatsYourEmail.animate
				x: 0
				opacity: 0
				options:
					time: 0.30
					curve: Bezier.ease
		Claudia_Jones.text = "Your Password"
		Claudia_Jones.color = "#bdbdbd"
		blinker.y = 13
		keyboard2.x = -375
		
	
		keyboard3.onTap ->
			blinker.y = 2000
			Claudia_Jones.text = "***"
			Claudia_Jones.color = "#000"
			redPass.visible = true
			keyboard3.x = -375
			weak.visible = true
		
			keyboard4.onTap ->
				Claudia_Jones.text ="******"
				redPass.visible = false
				yelloPass.visible = true
				keyboard4.x = -375
				circle_arrow_right3.backgroundColor =  "#1199EE"
				weak.text = "okay"
				
				keyboard5.onTap ->
					Claudia_Jones.text = "********"
					yelloPass.visible = false
					greenPass.visible = true
					weak.text = "good"
				circle_arrow_right3.onTap ->
					Views.fadeIn(screen3)
					
					logo_cover1.animate
						x: -150
						y: -127
						height: 75
						#opacity: 0.58
						options:
							time: 2
							curve: Bezier.linear
							
					logo_cover2.animate
						#width: 0
						#height: 0
						x: 150	
						y: 150
						#opacity: 0.60
						options:
							time: 1.5
							curve: Bezier.linear
					haven_logo_1.animate
						opacity: 1
						options:
							time: 2
							curve: Bezier.ease
						
					welcome.animate
						opacity: 1
						color: "#000000"
						options:
							time: 1
							curve: Bezier.ease
							delay: 1.5

			
		
#keyboard5.on## ->

		
	
	


	
