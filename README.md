# CrowdFunder

A Kickstarter-style crowdfunding platform: React and Redux on the front end, Node.js and PostgreSQL behind it, Stripe for payments, Amazon S3 for campaign images, and Google sign-in for auth. Built in 2017 as my DevMountain capstone.

Full write-up: https://marcandy.github.io/projects/crowdfunder/

## What it does

Browse campaigns, create one with images uploaded to S3, and back projects with real Stripe charges in test mode. Funding progress stays consistent across listing and detail views through shared Redux state.

## Architecture notes

- PostgreSQL over a document store: users, campaigns, and pledges are joins, sums, and constraints, so "how much has this campaign raised" is a query rather than a reduce over JSON
- Redux centralizes campaign and pledge state that several views read at once
- Real Stripe charges instead of a faked payment step, which meant handling failure states and idempotency as a student

## Status

2017 code, kept public as the starting point of my full-stack timeline. Running it today needs a local PostgreSQL database plus your own Stripe, S3, and Google OAuth keys; the demo ran on Heroku's free tier, which was retired in 2022. A rebuild today would use server state (React Query) instead of Redux boilerplate, add migrations and tests, and deploy somewhere durable.
