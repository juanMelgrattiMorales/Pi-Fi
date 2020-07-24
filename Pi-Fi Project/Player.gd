extends KinematicBody2D

const acc = 8
const mv = 500
const up = 500
const fall = 10
var fjump = false
var sjump = true 
var velocity = Vector2()
var state
var fall_speed = 200
var prev_speed 


func get_input():
	if Input.is_action_pressed("ui_right"):
		velocity.x += acc
	elif Input.is_action_pressed("ui_left"):
		velocity.x += -acc
	elif velocity.x > 0:
		velocity.x -= acc
	elif velocity.x < 0:
		velocity.x -= -acc
	
	if Input.is_action_just_pressed("ui_up") && fjump == false:
		velocity.y -= up
		fjump = true
		sjump = false
	elif Input.is_action_just_pressed("ui_up") && sjump == false:
		velocity.y -= up
		sjump = true
	else:
		velocity.y += fall

func _physics_process(_delta):
	get_input()
	if velocity.x >= mv:
		velocity.x = mv
	elif velocity.x <= -mv:
		velocity.x = -mv
	velocity = move_and_slide(velocity)
	prev_speed = velocity.y

func inst_vel():
	pass

func fall_damage():
	#rint("prev_speed: ", prev_speed)
	if prev_speed >= fall_speed :
		queue_free()
		#print("queue free")

func _on_feet_body_entered(body):
	print(body.name)
	print(prev_speed)
	print(velocity.y)
	fall_damage()
	fjump = false
	sjump = true
