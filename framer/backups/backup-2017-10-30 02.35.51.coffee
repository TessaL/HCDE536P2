
ViewController = require 'ViewController'
Views = new ViewController
	initialView: home
	
flow = new FlowComponent

flow.showNext(home)

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
		#backgroundColor: "#ffffff"
		y: 291
		options: 
			time: 0.4
	Signup_Button.onAnimationEnd ->
		#flow.showOverlayCenter(screen2)
		#flow.current.animate
		#	opacity: 0
		Views.switchInstant(screen2)

redPass.visible = false
yelloPass.visible = false
greenPass.visible = false

haven_logo.states.a =
	width: 100
	height: 100
	y: 92
	

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
		backgroundColor: "rgba(139,212,255,1)"
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
		backgroundColor: "rgba(139,212,255,1)"
		options:
			time: 0.01
			curve: Bezier.linear
	
	circle_arrow_right2.animate
		backgroundColor: "rgba(139,212,255,1)"
		options:
			time: 0.01
			curve: Bezier.linear
	
	circle_arrow_right2.onTap ->
		circle_arrow_right2.backgroundColor = "#bdbdbd"
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
		
			keyboard4.onTap ->
				Claudia_Jones.text ="******"
				redPass.visible = false
				yelloPass.visible = true
				keyboard4.x = -375
				circle_arrow_right2.backgroundColor = "rgba(139,212,255,1)"
				
				keyboard5.onTap ->
					Claudia_Jones.text = "********"
					yelloPass.visible = false
					greenPass.visible = true
			
	

	
	
	


	
