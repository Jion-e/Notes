��ȡ��������:
window.screen.height ��ȡ������߶�
$(window).height()   ��ȡ��������ӻ����ڵĸ߶�
$(document).height() ��ȡ�������ǰ�����ĵ��߶�
$(document.body).height() ��ȡ�������ǰ����body�߶�

window.screen.width ��ȡ��������
$(window).width()   ��ȡ��������ӻ����ڵĿ��
$(document).width() ��ȡ�������ǰ�����ĵ����
$(document.body).width() ��ȡ�������ǰ����body���

window.screenTop  ����������Top
window.screenLeft ����������Left 

���룺
.after()�� ���ִ�Ԫ�ص� �ⲿ���� ���� ����Ԫ��  
.before()�����ִ�Ԫ�ص� �ⲿ���� ǰ�� ����Ԫ��  
.append()�����ִ�Ԫ�ص� �ڲ����� ���� ����Ԫ��  
.prepend():���ִ�Ԫ�ص� �ڲ����� ǰ�� ����Ԫ��
.wrap(): Ԫ�ذ���
.wrapAll(): Ԫ�ذ���
.empty(): ɾ��Ԫ�ص������ӽڵ�
.remove(): ɾ��ƥ��Ԫ��
.clone(): ��¡Ԫ��
.replaceWith(): �滻�ڵ�
.replaceAll(): �滻�ڵ�

�ڵ������
.children(): ��ȡȫ���ӽڵ�
.next(): ��ȡ��һ���ֵܽڵ�
.prev(): ��ȡǰһ���ֵܽڵ�
.siblings(): ��ȡ�����ֵܽڵ�
.closest(): ��ȡ�����ƥ��ڵ�

��ֵ��
.val():  ��ȡvauleֵ
.attr(): ��ȡ����ֵ  	.removeAttr(): �Ƴ�����
.text(): ��ȡԪ������
.html(): ��ȡhtml����

css������
.css() :������ʽ����
.width(): ��ȡԪ�ؿ��
.height(): ��ȡԪ�ظ߶�
.offset(): ��ȡԪ���ڵ�ǰ���ڵ����ƫ���� left,top;
.position(): ��ȡԪ��������һ��������position���Եĸ��ڵ�����ƫ���� left,top;
.scrollTop(): ��ȡ��ǰԪ�صĹ�������Ե�ǰԪ�ض�����λ��
.scrollLeft(): ��ȡ��ǰԪ�صĹ�������Ե�ǰԪ����ߵ�λ��

.addClass(): ����class
.removeClass(): ɾ��class
.toggleClass(): �л�class
.hasClass(): �Ƿ�ʹ����ʽ

����Ч����
.hide(): ����
.show(): ��ʾ
.toggle(): ��ʾ����

.fadeIn(): ����
.fadeOut(): ����
.fadeTo(): ���俪��

.slideUp(): ���ϻ���
.slideDown(): ���»���
.slideToggle(): ��������

.animate({params},speed,callback): �Զ��嶯�� ( λ�ÿ���ӣ�{left: "+=150px"} )
.stop(): ֹͣ���ڽ��еĶ���

���������
.pop()ȥ���������һ��Ԫ��