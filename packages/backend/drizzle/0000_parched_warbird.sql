CREATE TABLE `user_keys` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`hashed_password` text,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user_sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`active_expires` blob NOT NULL,
	`idle_expires` blob NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`phone` text,
	`title` text,
	`preferences_json` text,
	`role` text,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ')),
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ'))
);
--> statement-breakpoint
CREATE INDEX `user_keys__user_id_idx` ON `user_keys` (`user_id`);--> statement-breakpoint
CREATE INDEX `user_sessions__user_id__idx` ON `user_sessions` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);