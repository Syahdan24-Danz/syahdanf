# EC2 Cost Analysis

## Objective

Estimate the monthly infrastructure cost of hosting a React portfolio
website on Amazon EC2.

This estimate uses public AWS On-Demand prices and a 730-hour monthly
scenario. It is a simulation, not the actual AWS lab bill. The real
experiment ran in an AWS lab for a short time and was shut down.

## Deployment Configuration

| Component | Configuration |
|---|---|
| Region | US East (N. Virginia) — us-east-1 |
| EC2 instance | t3.micro |
| Operating system | Ubuntu Linux |
| Instance count | 1 |
| EBS volume size | 8 GiB |
| EBS volume type | Not recorded: both gp2 and gp3 are estimated below |
| Public IPv4 | 1 address |
| Pricing model | On-Demand — simulation assumption |
| Estimated runtime | 730 hours per month |
| Monitoring | CloudWatch metrics and CPU alarm |
| Notification | Amazon SNS email subscription |

## Pricing Assumptions

- Prices were reviewed on 2 November 2026.
- The instance and public IPv4 are used for 730 hours in the month.
- The 8 GiB EBS volume remains provisioned for a full month.
- Standard Linux On-Demand pricing is used.
- The calculation excludes credits, promotional benefits, taxes,
  currency conversion, and account-specific discounts.
- Data transfer, CloudWatch, SNS, snapshots, and any additional
  resources are not yet quantified.
- No additional gp3 IOPS or throughput above the included baseline
  is assumed in the gp3 scenario.
- No surplus CPU credit charge is included.

## Estimated Monthly Cost

### 1. EC2 Compute

| Item | Calculation | Estimated Cost |
|---|---|---:|
| t3.micro Linux | USD 0.0104/hour × 730 hours | USD 7.59 |

Unrounded calculation: USD 7.592.

### 2. EBS Storage — 8 GiB

The volume type was not recorded, so both options are shown.

| Scenario | Calculation | Estimated Cost |
|---|---|---:|
| If volume is gp3 | USD 0.08/GiB-month × 8 GiB | USD 0.64 |
| If volume is gp2 | USD 0.10/GiB-month × 8 GiB | USD 0.80 |

### 3. Public IPv4

| Item | Calculation | Estimated Cost |
|---|---|---:|
| One in-use public IPv4 | USD 0.005/hour × 730 hours | USD 3.65 |

## Subtotal by Volume Type

| Scenario | EC2 | EBS | Public IPv4 | Monthly Subtotal |
|---|---:|---:|---:|---:|
| EBS gp3 | USD 7.59 | USD 0.64 | USD 3.65 | USD 11.88 |
| EBS gp2 | USD 7.59 | USD 0.80 | USD 3.65 | USD 12.04 |

These are partial subtotals. They do not yet include data transfer,
CloudWatch, SNS, snapshots, taxes, or other applicable charges.

## Actual Lab Usage

| Item | Recorded Value |
|---|---|
| EBS volume | 8 GiB, attached to /dev/sda1 |
| Attachment time | 2 November 2026, 13:55 WIB (UTC+7) |
| Delete on termination | Yes |
| Volume encryption | Not enabled |
| Actual lab billing | Not available for this analysis |
| Lab credits | Not recorded |

The attachment time is not sufficient to calculate the final experiment
cost: the resource end time and actual billing details are also needed.

Delete on termination indicates the volume is configured to be deleted
when the attached instance is terminated. It does not mean the volume
is deleted when the instance is merely stopped.

## Monitoring and Cost Observations

During the initial observation, CPU utilization was low after the
deployment activity. This is a short observation and is not enough
to justify downsizing the instance.

The t3.micro is a burstable instance. Sustained CPU use may generate
additional surplus credit charges when applicable in Unlimited mode.
The instance's credit configuration and actual surplus charges have
not been verified.

## Potential Cost Improvements

1. Stop the instance outside working hours if the website does not
   need to be available continuously. EBS storage can continue to
   incur charges while the instance is stopped.
2. Monitor CPU and memory over a representative workload before
   recommending a different instance size.
3. Compare this EC2 setup with S3 and CloudFront after implementing
   that architecture and estimating the same workload.
4. Remove unused experimental resources after verifying they are
   no longer needed.

## Sources

- EC2 T3 pricing:
  https://aws.amazon.com/ec2/instance-types/t3/
- EBS volume comparison:
  https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-storage-compare-volume-types.html
- Public IPv4 pricing:
  https://aws.amazon.com/vpc/pricing/
- T3 Unlimited mode:
  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode.html

## Limitations

This is a public-price simulation for learning and portfolio purposes.
It is not an invoice and does not represent the actual charges or
credit consumption of the AWS lab.