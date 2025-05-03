// import {
//   Directive,
//   ElementRef,
//   HostListener,
//   OnInit,
//   Renderer2,
// } from '@angular/core';

// @Directive({
//   selector: '[appCursorEffect]',
// })
// export class CursorEffectDirective implements OnInit {
//   private canvas!: HTMLCanvasElement;
//   private ctx!: CanvasRenderingContext2D;
//   private particles: any[] = [];

//   constructor(private el: ElementRef, private renderer: Renderer2) {}

//   ngOnInit(): void {
//     this.createCanvas();
//     this.animate();
//     window.addEventListener('resize', this.resizeCanvas.bind(this));
//   }

//   private createCanvas(): void {
//     this.canvas = this.renderer.createElement('canvas');
//     this.renderer.setStyle(this.canvas, 'position', 'absolute');
//     this.renderer.setStyle(this.canvas, 'top', '0');
//     this.renderer.setStyle(this.canvas, 'left', '0');
//     this.renderer.setStyle(this.canvas, 'z-index', '9999');
//     this.renderer.setStyle(this.canvas, 'position', 'fixed');
//     this.renderer.setStyle(this.canvas, 'pointer-events', 'none');
//     this.renderer.appendChild(document.body, this.canvas);
//     this.ctx = this.canvas.getContext('2d')!;
//     this.resizeCanvas();
//   }

//   private resizeCanvas(): void {
//     this.canvas.width = window.innerWidth;
//     this.canvas.height = window.innerHeight;
//   }

//   @HostListener('document:mousemove', ['$event'])
//   onMouseMove(event: MouseEvent): void {
//     for (let i = 0; i < 5; i++) {
//       this.particles.push({
//         x: event.clientX,
//         y: event.clientY,
//         alpha: 1,
//         size: Math.random() * 10,
//         vx: Math.random() - 0.5,
//         vy: Math.random() - 1,
//       });
//     }
//   }

//   private animate(): void {
//     requestAnimationFrame(this.animate.bind(this));
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

//     this.particles = this.particles.filter((p) => p.alpha > 0);
//     this.particles.forEach((p) => {
//       p.x += p.vx;
//       p.y += p.vy;
//       p.alpha -= 0.05;

//       this.ctx.save();
//       this.ctx.globalAlpha = p.alpha;
//       this.ctx.fillStyle = '#38B2AC';
//       this.ctx.font = `${p.size}px monospace`;
//       this.ctx.fillRect(p.x, p.y, p.size, p.size);
//       this.ctx.restore();
//     });
//   }
//   ngOnDestroy(): void {
//     window.removeEventListener('resize', this.resizeCanvas.bind(this));
//     this.renderer.removeChild(document.body, this.canvas);
//   }
// }
