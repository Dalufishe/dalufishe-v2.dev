---
title: Godot 中實現簡單的平滑移動效果
published: 2024-11-26
description: ""
image: ""
tags: ["Game Developments", "Programming"]
category: "遊戲開發"
draft: false
---

Godot (4 以上版本) 實現簡單平滑移動效果範例程式碼，CharacterBody2D 作為玩家移動腳ˇ色，開始移動和停下會分別增加阻力和摩擦力：

```rust
extends CharacterBody2D


const SPEED := 500.0
var ACC := 45
var FRICTION := 600

func _physics_process(delta):
	var direction = get_input()

	if direction!= Vector2.ZERO:
		accelerate(direction)
	else:
		add_friction(direction)

	play_sprite_movement()

func get_input() -> Vector2:
	var input_dir = Vector2.ZERO
	input_dir.x = Input.get_axis("left", "right")
	input_dir.y = Input.get_axis("up", "down")
	input_dir = input_dir.normalized()
	return input_dir

func accelerate(direction):
	velocity = velocity.move_toward(SPEED * direction, ACC)

func add_friction(direction):
	velocity = velocity.move_toward(Vector2.ZERO, FRICTION)

func play_sprite_movement():
	move_and_slide()
```
